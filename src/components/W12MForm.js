import W12MHeader from "./W12MHeader";
import FormInputItem from "./FormInputItem";

const W12MForm = () => {
  const printResults = () => {
    const form = document.getElementsByClassName("Form")[0];
    let formItems = form.getElementsByTagName("input");
    formItems = [...formItems, ...form.getElementsByTagName("textarea")];
    formItems = [...formItems, ...form.getElementsByTagName("select")];
    console.log("form results: ", formItems.map((item) => item.name + " : " + item.value).join(", "));
  };
  return (
    <section className="w12MForm" style={{ display: "flex", flexFlow: "column wrap", maxWidth: "600px" }}>
      <W12MHeader />
      <div className="Form">
        <hr />
        <FormInputItem title="Species Name" type="textInput" validRegex="[A-Za-z]" minChar="3" maxChar="23" />
        <FormInputItem title="Planet Name" type="textInput" validRegex="[A-Za-z0-9]" minChar="2" maxChar="49" />
        <FormInputItem title="Number of beings" type="numberInput" validRegex="[0-9]" minChar="10" maxChar="-1" />
        <FormInputItem title="What is 2 + 2" type="selectInput" selectOptions={["4", "Not 4"]} />
        <FormInputItem title="Reason for sparing" type="textareaInput" validRegex="[sS]" minChar="17" maxChar="153" />
      </div>
      <button onClick={(e) => printResults(e)}>Send</button>
      <p></p>
    </section>
  );
};

export default W12MForm;
