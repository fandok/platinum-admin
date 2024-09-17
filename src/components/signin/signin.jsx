import { Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <div className="flex">
      <img src="car_admin.jpg" alt="car_admin.jpg" />

      <div className="container formcontrol  ">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
          </Form.Group>
          <Form.Control type="email" placeholder="Enter email" name="email" />

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
          </Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Button className="button" size="lg">
              Block level button
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Login;
