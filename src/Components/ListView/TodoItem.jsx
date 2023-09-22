import { InputGroup, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "../../style.css";

function ListItem({ todo, toggleSelect, toggleComplete, handleDelete }) {
  return (
    <InputGroup
      style={{
        background: "rgb(221 221 221)",
        marginBottom: "7px",
        alignItems: "center",
        padding: "8px 12px",
        borderRadius: "5px",
        justifyContent: "space-between",
      }}
    >
      <div className="d-flex align-items-center mr-5">
        <input
          className="mm"
          type="checkbox"
          id={todo.id}
          checked={todo.isSelect}
          onChange={() => toggleSelect(todo.id)}
        />
        <div className="mx-3">
          <h5>{todo.text}</h5>
          <p>{todo.time.toDateString()}</p>
        </div>
      </div>
      <div>
        <Button
          style={{ borderRadius: "7px", marginRight: '9px' }}
          onClick={() => toggleComplete(todo.id)}
          variant={todo.isComplete ? "danger" : "success"}
        >
          {todo.isComplete ? "Complete" : "Running"}
        </Button>

        <Button
          style={{ borderRadius: "7px" }}
          variant="warning"
          onClick={() => handleDelete(todo.id)}
        >
          Delete
        </Button>
      </div>
    </InputGroup>
  );
}

ListItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};

export default ListItem;
