import React, { useState } from "react";
import "./App.css";

function Form(props) {
  const [nameVal, setNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [rollVal, setRollVal] = useState("");
  //   const [activeBtn, setActiveBtn] = useState(false);

  const onInputChange = (e) => {
    const target = e.target;

    if (target.name === "name") {
      setNameVal(target.value);
    } else if (target.name === "email") {
      setEmailVal(target.value);
    } else {
      setRollVal(target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addMember(nameVal, emailVal, rollVal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={nameVal} onChange={onInputChange} />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={emailVal}
        onChange={onInputChange}
      />
      <label>Roll:</label>
      <input type="text" name="roll" value={rollVal} onChange={onInputChange} />
      <input type="submit" value="Add" />
    </form>
  );
}

export default Form;
