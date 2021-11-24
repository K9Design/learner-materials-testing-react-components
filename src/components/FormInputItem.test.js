import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormInputItem from "./FormInputItem";

describe("Testing text input field", () => {
  test("renders input title", () => {
    const data = {
      title: "test title",
      type: "textInput",
      validRegex: "[A-Za-z]",
      minChar: "0",
      maxChar: "3",
    };
    render(<FormInputItem {...data} />);
    const sample = screen.getByText(/test title/i);
    expect(sample).toBeInTheDocument();
  });

  test("renders input warning", () => {
    const data = {
      title: "test title",
      type: "textInput",
      validRegex: "[A-Za-z]",
      minChar: "0",
      maxChar: "3",
    };
    render(<FormInputItem {...data} />);
    const inputField = screen.getByRole("textbox");
    userEvent.type(inputField, "");
    const sample = screen.getByText(/warning/i);
    expect(sample).toBeInTheDocument();
  });

  test("renders no input warning", () => {
    const data = {
      title: "test title",
      type: "textInput",
      validRegex: "[A-Za-z]",
      minChar: "0",
      maxChar: "3",
    };
    render(<FormInputItem {...data} />);
    const inputField = screen.getByRole("textbox");
    userEvent.type(inputField, "Earth");
    const sample = screen.queryByText(/warning/i);
    expect(sample).not.toBeInTheDocument();
  });
});

describe("Testing text area input field", () => {
  test("renders input title", () => {
    const data = {
      title: "test text",
      type: "textareaInput",
      validRegex: "[sS]",
      minChar: "0",
      maxChar: "3",
    };
    render(<FormInputItem {...data} />);
    const sample = screen.getByText(/test text/i);
    expect(sample).toBeInTheDocument();
  });

  test("renders input warning", () => {
    const data = {
      title: "test title",
      type: "textareaInput",
      validRegex: "[sS]",
      minChar: "0",
      maxChar: "3",
    };
    render(<FormInputItem {...data} />);
    const inputField = screen.getByRole("textbox");
    userEvent.type(inputField, "");
    const sample = screen.getByText(/warning/i);
    expect(sample).toBeInTheDocument();
  });

  test("renders no input warning", () => {
    const data = {
      title: "test title",
      type: "textareaInput",
      validRegex: "[sS]",
      minChar: "15",
      maxChar: "-1",
    };
    render(<FormInputItem {...data} />);
    const inputField = screen.getByRole("textbox");
    userEvent.type(inputField, "Please dont kill us! We are too pretty!");
    const sample = screen.queryByText(/warning/i);
    expect(sample).not.toBeInTheDocument();
  });
});

describe("Testing select input field", () => {
  test("renders input title", () => {
    const data = {
      title: "test text",
      type: "selectInput",
      selectOptions: ["A", "B", "C"],
    };
    render(<FormInputItem {...data} />);
    const sample = screen.getByText(/-- Please Select --/i);
    expect(sample).toBeInTheDocument();
  });

  test("renders input warning", () => {
    const data = {
      title: "test text",
      type: "selectInput",
      selectOptions: ["A", "B", "C"],
    };
    render(<FormInputItem {...data} />);
    const sample = screen.getByText(/warning/i);
    expect(sample).toBeInTheDocument();
  });

  test("renders no input warning", () => {
    const data = {
      title: "test text",
      type: "selectInput",
      selectOptions: ["A", "B", "C"],
    };
    render(<FormInputItem {...data} />);
    userEvent.selectOptions(screen.getByRole("combobox"), ["B"]);
    const sample = screen.queryByText(/warning/i);
    expect(sample).not.toBeInTheDocument();
  });
});
