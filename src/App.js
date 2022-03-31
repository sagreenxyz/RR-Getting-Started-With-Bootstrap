import './App.css';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

function App() {
  return (
    <div className="App">
      <Nav fill variant="tabs" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/about">About Us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/test1">Test 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/test2">Test 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/test3">Test 3</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/atest4bout">Test 4</Nav.Link>
        </Nav.Item>
      </Nav>

      <h1>Bootstrap Website</h1>
      <Button>
        Next
      </Button>
    </div>
  );
}

export default App;
