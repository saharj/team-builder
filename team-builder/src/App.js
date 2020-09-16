import React, { useState } from "react";
import { Card, CardText, Col, Row, Container, Button } from "reactstrap";
import Form from "./Form.js";
import "./App.css";

function App() {
  const [memberList, setMemberList] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(null);

  const addMember = (n, e, r) => {
    if (memberToEdit === null) {
      const newMember = { name: n, email: e, roll: r };
      setMemberList([...memberList, newMember]);
    } else {
      const list = memberList;
      list[memberToEdit].name = n;
      list[memberToEdit].email = e;
      list[memberToEdit].roll = r;
      setMemberList(list);
      setMemberToEdit(null);
    }
  };

  const onEditToggle = (e, i) => {
    setMemberToEdit(i);
  };

  return (
    <div className="App">
      <Form addMember={addMember} memberToEdit={memberList[memberToEdit]} />
      <Container className="m-2">
        <Row>
          <Col>
            {memberList.map((member, i) => (
              <Card
                body
                key={i}
                style={{ border: "1px solid gray", margin: "20px" }}
              >
                <CardText>Name: {member.name}</CardText>
                <CardText>Email: {member.email}</CardText>
                <CardText>Roll: {member.roll}</CardText>
                <Button onClick={(e) => onEditToggle(e, i)}>Edit</Button>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
