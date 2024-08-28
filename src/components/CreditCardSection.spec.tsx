import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CreditCardSection from "./CreditCardSection";
import { init_state } from "../reducers/CreditCardInfo";

describe("Credit Card Section", () => { 
  
  it("should display card content", () => {
    const quitSection = (section:string)=>{console.log(section);}
    render(<CreditCardSection onQuit={jest.fn()} onUpdate={jest.fn()} onValid={jest.fn()} creditCardInfo={{...init_state}}/>);
    const linkElement = screen.getByText(/User.FirstName/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("submit button should be enabled when using valid info", ()=>{
    const quitSection = jest.fn()
    const onUpdate = jest.fn()
    const onValid = jest.fn()
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
    render(<CreditCardSection 
      onQuit={quitSection}
      onUpdate={onUpdate}
      onValid={onValid}
      creditCardInfo={creditCardInfo}
    />);
    const linkElement = screen.getByText("Submit");
    expect(linkElement).toBeEnabled();
  })
});
