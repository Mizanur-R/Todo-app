import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

function TableItem({ todo, toggleSelect, toggleComplete, handleDelete }) {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          id={todo.id}
          checked={todo.isSelect}
          onChange={() => toggleSelect(todo.id)}
        />
      </td>
      <td>
        <p>{todo.time.toDateString()}</p>
      </td>
      <td>
        <h5>{todo.text}</h5>
      </td>
      <td className="text-end">
        <Button
          onClick={() => toggleComplete(todo.id)}
          style={{marginRight: '9px'}}
          variant={todo.isComplete ? 'danger' : 'success'}
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
      </td>
    </tr>
  );
}

TableItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};

export default TableItem;
