import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuSection from "./MenuSection";

describe("Menu screen", () => {
  it("should display menu content", () => {
    const quitSection = (section:string)=>{console.log(section);}
    render(<MenuSection onQuit={quitSection}/>);
    const linkElement = screen.getByText(/This is menu content/i);
    expect(linkElement).toBeInTheDocument();
  });
});
