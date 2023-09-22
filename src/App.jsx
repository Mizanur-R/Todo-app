import { Container, Row, Col} from 'reactstrap'
import Todos from './Components/Todos/Todos'
import './style.css'

function App() { 
  return (
    <Container>
      <Row>
        <Col>
          <Todos />
        </Col>
      </Row>
    </Container>
  )
}

export default App
