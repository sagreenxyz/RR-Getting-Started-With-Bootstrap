import './App.css';
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'

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

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>


      <div>
        <Button>
          Next
        </Button>
      </div>

      <Form>
        <Form.Group>
          <Form.Label>Form Dropdown with favorite movies</Form.Label>
          <Form.Control as="select">
            <option>Inception</option>
            <option>Forrest Gump</option>
            <option>Shawshank Redemption</option>
            <option>Spiderman: Into the Spiderverse</option>
            <option>Avengers: Endgame</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
