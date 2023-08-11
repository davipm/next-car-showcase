import React from "react";
import { render, fireEvent } from "@testing-library/react";

import CustomButton from "@/components/CustomButton";
import { CustomButtonProps } from "@/@types";

// Mock the props for testing
const mockProps: CustomButtonProps = {
  handleClick: jest.fn(),
  containerStyles: "test-container",
  textStyles: "test-text",
  btnType: "button",
  title: "Test Button",
  rightIcon: "/test-icon.png",
  isDisabled: false,
};

describe("CustomButton", () => {
  it("renders correctly with provided props", () => {
    const { getByText, getByAltText } = render(<CustomButton {...mockProps} />);

    const buttonElement = getByText(mockProps.title);
    const iconElement = getByAltText("arrow_left");

    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  it("calls the handleClick function when clicked", () => {
    const { getByText } = render(<CustomButton {...mockProps} />);

    const buttonElement = getByText(mockProps.title);
    fireEvent.click(buttonElement);

    expect(mockProps.handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders with the correct containerStyles and textStyles classes", () => {
    const { containerStyles, textStyles } = mockProps;
    const { getByTestId } = render(<CustomButton {...mockProps} />);

    const buttonElement = getByTestId("custom-button");
    expect(buttonElement).toHaveClass("custom-btn");
    // @ts-ignore
    expect(buttonElement).toHaveClass(containerStyles);
    // @ts-ignore
    expect(buttonElement.querySelector(".flex-1")).toHaveClass(textStyles);
  });

  it("renders as disabled when isDisabled prop is true", () => {
    const { getByTestId } = render(
      <CustomButton {...mockProps} isDisabled={true} />,
    );

    const buttonElement = getByTestId("custom-button");
    expect(buttonElement).toBeDisabled();
  });
});
