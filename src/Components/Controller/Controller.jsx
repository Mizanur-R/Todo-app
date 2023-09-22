import PropTypes from "prop-types";
import SearchPanel from "./SearchPanel";
import { Row, Col } from "react-bootstrap";
import FilterController from "./FilterController";
import ViewController from "./ViewController";
import BulkController from "./BulkController";

const Controller = ({
  terms,
  toggleForm,
  handleSearch,
  handleFilter,
  handleViewChange,
  view,
  clearCompleted,
  clearSelected,
  reset,
  filterView
}) => (
  <div>
    <SearchPanel
      terms={terms}
      toggleForm={toggleForm}
      handleSearch={handleSearch}
    /> 
      <Row className="align-items-center my-4">
        <Col md={{ size: "4" }}>
          <FilterController handleFilter={handleFilter} filterView={filterView} />
        </Col>
        <Col md={{ size: "4" }}>
          <ViewController handleViewChange={handleViewChange} view={view} />
        </Col>
        <Col md={{ size: "4" }}>
          <BulkController
            clearCompleted={clearCompleted}
            clearSelected={clearSelected}
            Reset={reset}
          />
        </Col>
      </Row> 
  </div>
);
Controller.propTypes = {
  terms: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  toggleForm: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  handleViewChange: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  clearSelected: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

export default Controller;
