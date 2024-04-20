import { Link } from "react-router-dom";
import { Navbar, Nav, FlexboxGrid } from "rsuite";

const Navigation = () => {
  return (
    <>
      <Navbar appearance="subtle">
        <FlexboxGrid justify="space-between">
          <Navbar.Brand href="#">15 de More 🥳</Navbar.Brand>
          <Nav>
            <Nav.Item as={Link} to="/" eventKey="2">
              Subir
            </Nav.Item>
            <Nav.Item as={Link} to="/files" eventKey="3">
              Galeria
            </Nav.Item>
          </Nav>
        </FlexboxGrid>
      </Navbar>
    </>
  );
};

export default Navigation;
