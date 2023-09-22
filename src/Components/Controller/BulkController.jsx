import { Button, ButtonGroup } from "react-bootstrap";

const BulkController = ({ clearCompleted, clearSelected, Reset }) => (
  <ButtonGroup>
    <Button variant="danger"  onClick={clearSelected}>
      Clear Selected
    </Button>
    <Button variant="danger" onClick={clearCompleted}>
      Clear Completed
    </Button>
    <Button variant="danger" onClick={Reset}>
      Reset
    </Button>
  </ButtonGroup>
);

export default BulkController;
