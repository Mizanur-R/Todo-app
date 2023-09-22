import { Label, Input, InputGroup } from "reactstrap";

const ViewController = ({handleViewChange, view}) => (
  <InputGroup>
    <Label htmlFor="list-view">
      <Input
        type="radio"
        id="list-view"
        name="listView"
        value="list"
        onChange={handleViewChange}
        checked={view === 'list'}
        className="mx-2"
      />
      List View
    </Label>
    <Label htmlFor="table-view">
      <Input
        type="radio"
        id="table-view"
        name="tableView"
        value="table"
        onChange={handleViewChange}
        checked={view === 'table'}
        className="mx-2"
      />
      Table View
    </Label>
  </InputGroup>
);


export default ViewController