import { useState } from "react";
import shortid from "shortid";
import ListView from "../ListView/Listview";
import TableView from "../Tableview/Tableview";
import Controller from "../Controller/Controller";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import CreateTodo from "../Todo_Form/CreateTodo";

const initialTodos = [
  {
    id: shortid.generate(),
    text: "I am First todo",
    description: "i am description",
    time: new Date(),
    isComplete: false,
    isSelect: false,
  },
  {
    id: shortid.generate(),
    text: "I am Second todo",
    description: "i am description",
    time: new Date(),
    isComplete: false,
    isSelect: true,
  },
];
const initialControl = {
  isOpenModalForm: false,
  searchTerms: "",
  view: "list",
  filterView: "all",
};
function Todos() {
  const [todos, setTodos] = useState(initialTodos);

  const [control, setControl] = useState(initialControl);

  const toggleComplete = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      })
    );
  };
  const toggleSelect = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isSelect: !todo.isSelect };
        }
        return todo;
      })
    );
  };

  const handleSearch = (event) => {
    setControl({ ...control, searchTerms: event });
  };
  const toggleForm = () => {
    setControl({
      ...control,
      isOpenModalForm: !control.isOpenModalForm,
    });
  };

  const getTodoItem = (todo) => {
    setTodos([
      {
        ...todo,
        id: shortid.generate(),
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      ...todos,
    ]);
    toggleForm();
  };

  const handleFilter = (value) => {
    setControl({ ...control, filterView: value });
  };

  const filteredTodos = todos.filter((todo) => {
    if (control.filterView === "completed") {
      return todo.isComplete;
    } else if (control.filterView === "running") {
      return !todo.isComplete;
    } else {
      return true; // Show all todos if filter is "all"
    }
  });

  const newTodos = filteredTodos.filter((todo) =>
    todo.text.toLowerCase().includes(control.searchTerms.toLowerCase())
  );

  const handleDelete = (id) => {
    setTodos(todos.filter(todoId => todoId.id !== id)) 
    
  }

  const view = () => {
    return control.view === "list" ? (
      <ListView
        todos={newTodos}
        toggleComplete={toggleComplete}
        toggleSelect={toggleSelect}
        handleDelete={handleDelete}
      />
    ) : (
      <TableView
        todos={newTodos}
        toggleComplete={toggleComplete}
        toggleSelect={toggleSelect}
        handleDelete={handleDelete}
      />
    );
  };

  const handleViewChange = (event) => {
    setControl({
      ...control,
      view: event.target.value,
    });
  };
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.isComplete));
  };
  const clearSelected = () => {
    setTodos(todos.filter((todo) => !todo.isSelect));
  };
  const reset = () => {
    setControl(initialControl);
    setTodos(initialTodos);
  };

  return (
    <div>
      <h1 className="display-23 text-center mb-5">React Todo</h1>
      <Controller
        terms={control.searchTerms}
        toggleForm={toggleForm}
        handleSearch={handleSearch}
        handleFilter={handleFilter}
        view={control.view}
        handleViewChange={handleViewChange}
        clearCompleted={clearCompleted}
        clearSelected={clearSelected}
        reset={reset}
        filterView={control.filterView}
      />
      <div className="todos">{view()}</div>
      <Modal show={control.isOpenModalForm} onHide={toggleForm}>
        <Modal.Header closeButton>
          <Modal.Title> Create New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateTodo getDate={getTodoItem} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Todos;
