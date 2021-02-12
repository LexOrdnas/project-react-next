import { Navbar, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './Menu.css';

function BaseMenu(props) {
    const { location } = props;
    return (
        <Navbar className="navbar-dark" bg="danger" expand="lg" fixed="top">
            <Navbar.Brand>
                Full Stack Eletro
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={location.pathname} className="ml-auto mr-3">
                    <Nav.Item>
                        <Nav.Link as={ Link } href="/" to="/"> Página Inicial </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={ Link } href="/products" to="/products"> Produtos </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={ Link } href="/ourstores" to="/ourstores"> Nossas Lojas </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={ Link } href="/contact" to="/contact"> Contato </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={ Link } href="/requests" to="/requests"> Pedidos </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={ Link } href="/signin" to="/signin" disabled> Entrar </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={ Link } href="/signout" to="/signout" disabled> Sair </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Menu = withRouter(BaseMenu);

export default Menu