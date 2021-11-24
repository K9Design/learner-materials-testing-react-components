import { useState } from "react";

const FormInputItem = ({ title, type, validRegex, minChar, maxChar, selectOptions = [] }) => {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);

  const validateMe = ({ value }) => {
    setValue(value);
    let valid = true;
    switch (type) {
      case "selectInput":
        if (value.length === 0) valid = false;
        break;
      case "textareaInput":
        if (value.length < minChar) valid = false;
        if (maxChar > 0 && value.length >> maxChar) valid = false;
        break;
      default:
        if (value.replace(new RegExp(validRegex, "gm"), "").length > 0) valid = false;
        if (value.length < minChar) valid = false;
        if (maxChar > 0 && value.length >> maxChar) valid = false;
    }
    setValid(valid);
  };

  const pattern = validRegex + "{" + minChar + "," + (maxChar > 0 ? maxChar : "") + "}";

  const textInput = (
    <input
      name={title}
      required
      className="textInput"
      pattern={pattern}
      type="text"
      value={value}
      onChange={(e) => validateMe(e.target)}
    ></input>
  );

  const numberInput = (
    <input
      name={title}
      required
      className="numberInput"
      pattern={pattern}
      type="number"
      value={value}
      onChange={(e) => validateMe(e.target)}
    ></input>
  );

  const selectInput = (
    <select name={title} required className="selectInput" onChange={(e) => validateMe(e.target)}>
      <option key="prompt" value="">
        -- Please Select --
      </option>
      {selectOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  const textareaInput = (
    <textarea
      name={title}
      required
      className="textareaInput"
      rows="10"
      cols="30"
      type="text"
      value={value}
      onChange={(e) => validateMe(e.target)}
    ></textarea>
  );

  const renderInput = (type) => {
    switch (type) {
      case "textInput":
        return textInput;
      case "numberInput":
        return numberInput;
      case "selectInput":
        return selectInput;
      case "textareaInput":
        return textareaInput;
      default:
        throw new Error("bad input field");
    }
  };

  return (
    <>
      <label className="title">{title}</label>
      <p />
      {renderInput(type)}
      {!valid ? (
        <p className="warning" style={{ color: "red" }}>
          Warning - Fail to fill this right and we all die!!!
        </p>
      ) : (
        <p />
      )}
      <hr />
    </>
  );
};

export default FormInputItem;
