import { Button, ButtonGroup } from "react-bootstrap";

const FilterController = ({ handleFilter, filterView }) => (
  <ButtonGroup>
    <Button variant={filterView === 'all'? 'danger' :  'primary'} onClick={() => handleFilter("all")}>All</Button>
    <Button variant={filterView === 'running' ? 'danger' : 'primary'} onClick={() => handleFilter("running")}>Running</Button>
    <Button variant={filterView === 'completed' ? 'danger' : 'primary'} onClick={() => handleFilter("completed")}>Completed</Button>
  </ButtonGroup>
); 

export default FilterController;
