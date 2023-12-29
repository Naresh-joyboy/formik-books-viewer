import React, { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = ({ api }) => {
  const [id, setId] = useState("");
  const [Author, setAuthor] = useState("");
  const [ISBNNumber, setISBNNumber] = useState("");
  const [Title, setTitle] = useState("");
  const [PublishDate, setPublishDate] = useState("");
  const [Soldcopies, setSoldcopies] = useState("");
  const navigate = useNavigate();

  const updates = async () => {
    try{
    await axios.put(`${api}/${id}`, {
      Author,
      ISBNNumber,
      Title,
      PublishDate,
      Soldcopies
    });
    navigate("/middle");
}catch(error){
    console.log("there is an error");
}
  };
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setAuthor(localStorage.getItem("Author"));
    setISBNNumber(localStorage.getItem("ISBNNumber"));
    setTitle(localStorage.getItem("Title"));
    setPublishDate(localStorage.getItem("PublishDate"));
    setSoldcopies(localStorage.getItem("Soldcopies"))
  }, []);
  return (
    <Form>
      <Form.Field className="formm">
        <label>Author</label>
        <input
          type="text"
          value={Author}
          placeholder="Enter Name"
          required
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Field>
      <Form.Field className="formm">
        <label>ISBNNumber</label>
        <input
          type="text"
          value={ISBNNumber}
          placeholder="Enter username"
          required
          onChange={(e) => setISBNNumber(e.target.value)}
        />
      </Form.Field>
      <Form.Field className="formm">
        <label>Title</label>
        <input
          type="text"
          value={Title}
          placeholder="Enter email"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Field>
      <Form.Field className="formm">
        <label>PublishDate</label>
        <input
          type="Date"
          value={PublishDate}
          placeholder="Enter address"
          required
          onChange={(e) => setPublishDate(e.target.value)}
        />
      </Form.Field>
      <Form.Field className="formm">
        <label>Soldcopies</label>
        <input
          type="Number"
          value={Soldcopies}
          placeholder="Enter Number"
          required
          onChange={(e) => setSoldcopies(e.target.value)}
        />
      </Form.Field>
      <Button className="btns btn-primary" onClick={updates}>
        update
      </Button>
    </Form>
  );
};

export default Update;
