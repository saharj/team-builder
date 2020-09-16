import React, { useState, useEffect } from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./App.css";

function Form(props) {
  const [nameVal, setNameVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [rollVal, setRollVal] = useState("");
  const [activeBtn, setActiveBtn] = useState(false);

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

  useEffect(() => {
    if (nameVal.length > 1 && emailVal.length > 1 && rollVal.length > 0) {
      setActiveBtn(true);
    } else {
      setActiveBtn(false);
    }
  }, [nameVal, emailVal, rollVal]);

  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <div className="form-group mb-2 mt-2 mr-sm-2 mb-sm-0">
        <label>
          Name:
          <input
            className="form-control"
            type="text"
            name="name"
            value={nameVal}
            onChange={onInputChange}
          />
        </label>
      </div>
      <div className="form-group mb-2 mr-sm-2 mb-sm-0">
        <label>
          Email:
          <input
            className="form-control"
            type="email"
            name="email"
            value={emailVal}
            onChange={onInputChange}
          />
        </label>
      </div>
      <div className="form-group mb-2 mr-sm-2 mb-sm-0">
        <label>
          Roll:
          <input
            className="form-control"
            type="text"
            name="roll"
            value={rollVal}
            onChange={onInputChange}
          />
        </label>
      </div>
      <input
        className={`btn-primary btn ${activeBtn ? "active" : "disabled"}`}
        type="submit"
        value="Add"
      />
    </form>
  );
}

export default Form;
