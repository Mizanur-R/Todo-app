import { useState } from "react";
import { Form, FormGroup, FormLabel, Button } from "react-bootstrap";
import { Input } from "reactstrap";

function CreateTodo({ getDate }) {
  const [inputState, setInputState] = useState({
    text: "",
    description: "",
  });

  const handleChange = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputState.text !== "") {
      getDate(inputState);
      e.target.reset();
      setInputState({ text: "", description: "" });
    }else{
      alert('Write Your Task')
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>Enter Task</FormLabel>
        <Input
          placeholder="Write Task"
          value={inputState.text}
          onChange={handleChange}
          name="text"
        />
      </FormGroup>
      <FormGroup>
        <FormLabel>Describ Task</FormLabel>
        <Input
          type="textarea"
          name="description"
          value={inputState.description}
          onChange={handleChange}
        />
      </FormGroup>
      <Button className="mt-3" type="submit">
        Add Task
      </Button>
    </Form>
  );
}

export default CreateTodo;
