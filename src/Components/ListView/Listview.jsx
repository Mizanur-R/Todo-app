import PropTypes from 'prop-types'
import ListItem from "./TodoItem";
import { ListGroup } from "react-bootstrap";

function ListView({ todos, toggleComplete, toggleSelect, handleDelete }) {
  return (
    <ListGroup color='primary'>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <ListItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              handleDelete={handleDelete}
              toggleSelect={toggleSelect}
            />
          ))
        ) : (
          <b>There is No Todos</b>
        )}
    </ListGroup>
  );
}

ListView.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleComplete: PropTypes.func.isRequired,
    toggleSelect: PropTypes.func.isRequired
}

export default ListView;
