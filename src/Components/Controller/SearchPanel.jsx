import { Button } from "react-bootstrap";
import PropTypes from 'prop-types'
import { Input } from "reactstrap";

const SearchPanel = ({ handleSearch, terms , toggleForm}) => (
  <div className="d-flex mb-3">
    <Input
      type="text"
      placeholder="Search Todos"
      onChange={(e) => handleSearch(e.target.value)}
      value={terms} 
      
    />
    <Button onClick={toggleForm} className="bg-success ms-4">
        New
    </Button>
  </div>
);

SearchPanel.propTypes = {
    terms: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired,
    toggleForm: PropTypes.func.isRequired
}

export default SearchPanel