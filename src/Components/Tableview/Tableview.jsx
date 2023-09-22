import TableItem from "./TableItem";
import PropTypes from "prop-types";
import "../../style.css";

function TableView({ todos, toggleComplete, toggleSelect, handleDelete }) {
  return (
    <table>
      <thead className="border-bottom">
        <tr>
          <th>#</th>
          <th>Time</th>
          <th>Todo</th>
          <th className="text-sm-end">Action</th>
        </tr>
      </thead>
      <tbody>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <TableItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              toggleSelect={toggleSelect}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <b>There is No Todos</b>
        )}
      </tbody>
    </table>
  );
}

TableView.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};

export default TableView;
