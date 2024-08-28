import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./app";
import MenuSection from "./components/MenuSection";


describe("React test", () => {
  
  it("should display menu content", () => {
    const quitSection = (section:string)=>{console.log(section);}
    render(<MenuSection onQuit={quitSection}/>);
    const linkElement = screen.getByText(/This is menu content/i);
    expect(linkElement).toBeInTheDocument();

    // const heading = screen.queryByRole("heading", {
    //   level: 1,
    // });

    // expect(heading).toBeInTheDocument();
    // expect(heading).toContainHTML("Welcome to your technical test!");
  });
});
