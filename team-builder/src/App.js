import React, { useState } from "react";
import { Card, CardText, Col, Row, Container } from "reactstrap";
import Form from "./Form.js";
import "./App.css";

function App() {
  const [memberList, setMemberList] = useState([]);

  const addMember = (n, e, r) => {
    const newMember = { name: n, email: e, roll: r };
    setMemberList([...memberList, newMember]);
  };
  return (
    <div className="App">
      <Form addMember={addMember} />
      <Container className="m-2">
        <Row>
          <Col>
            {memberList.map((member, i) => (
              <Card body key={i} style={{ border: "1px solid gray" }}>
                <CardText>Name: {member.name}</CardText>
                <CardText>Email: {member.email}</CardText>
                <CardText>Roll: {member.roll}</CardText>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
