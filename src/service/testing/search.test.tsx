import { render, fireEvent, RenderResult } from "@testing-library/react";
import InputSearch from "../../components/InputSearch";
import { beforeEach, describe, expect, test } from "vitest";
import { BrowserRouter } from "react-router-dom";

describe("Input Component", () => {
  let renderResult: RenderResult;
  let inputElement: HTMLInputElement;
  let submitButton: HTMLButtonElement;

  // setting test case
  beforeEach(() => {
    renderResult = render(<InputSearch />, {
      wrapper: BrowserRouter,
    });
    inputElement = renderResult.getByPlaceholderText(
      "Search"
    ) as HTMLInputElement;
    submitButton = renderResult.getByRole("button", {
      name: "Search",
    }) as HTMLButtonElement;
  });

  // test case
  test("should update input value on change", () => {
    const onChangeMock = jest.fn();
    fireEvent.change(inputElement, { target: { value: "avengers" } });
    fireEvent.click(submitButton);
    expect(onChangeMock).toHaveBeenCalled();
    expect(inputElement.value).toBe("avengers");
  });
});
