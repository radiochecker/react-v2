import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./app";
import {Provider} from "react-redux"
import configureMockStore from "redux-mock-store"
import ShallowRender from "react-shallow-renderer";

const mockStore = configureMockStore([])

describe("App", () => {
  const getMockStore = ()=>{
    const creditCardInfo={
      cardValidInfo:{
        expiredDate:true,
        name:true,
        cvc:true,
        cardNumber:true
      },
      cardInfo:{
        expiredDate: "02/2024",
        name: "test test",
        cvc: "123",
        cardNumber:"4111111111111111"
      }
    }

    return mockStore(creditCardInfo)
  }
  
  it("App can be render out without issue", () => {
    
    const store = getMockStore();
    const renderer = new ShallowRender();
    renderer.render(
      <Provider store={store}>
        <App/>
      </Provider>
    )

    const result = renderer.getRenderOutput();
    expect(result).not.toBeNull()
  });
});
