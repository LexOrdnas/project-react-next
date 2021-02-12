// import './Footer.css';
import { Navbar, Nav } from 'react-bootstrap';

export function PaymentForm() {
    return (
        <div class="container text-center my-5">
            <p class="h3 text-danger my-3">Formas de pagamento</p>
            <img class="img-fluid" src={require(`./images/payment-form.png`).default} width="500" alt="Formas de pagamento" />
        </div>
    );
}

export function OurStores() {
    return (
        <div class="container-fluid bg-danger py-5">
            <div class="row text-white justify-content-md-center">
                <div class="col-md-3 text-center">
                    <h3>Rio de Março</h3>
                    <p>Avenida de São João, 500</p>
                    <p>10° Andar, Prédio AA</p>
                    <p>Centro</p>
                    <p>11 4512-4554</p>
                </div>
                <div class="col-md-3 text-center">
                    <h3>Rio de Janeiro</h3>
                    <p>Avenida de São João, 500</p>
                    <p>10° Andar, Prédio AA</p>
                    <p>Centro</p>
                    <p>11 4512-4554</p>
                </div>
                <div class="col-md-3 text-center">
                    <h3>Rio de Abril</h3>
                    <p>Avenida de São João, 500</p>
                    <p>10° Andar, Prédio AA</p>
                    <p>Centro</p>
                    <p>11 4512-4554</p>
                </div>
            </div>
        </div>
    );
}

export function ContactInfo() {
    return (
        <div class="container-fluid bg-danger">
             <div class="row justify-content-md-center">
                <div class="col-md text-center">
                    <img class="col-1" src={require(`./images/email.png`).default} alt="E-mail" />
                    <p class="col">contato@fullstackeletro.com</p>
                </div>
                <div class="col-md text-center">
                    <img class="col-1" src={require(`./images/whatsapp.png`).default} alt="whatsapp" />
                    <p class="col">(11) 99999-9999</p>
                </div>
             </div>        
         </div>
    );
}

export function Footer() {
    return (
        <Navbar className="justify-content-center navbar-dark" bg="danger" expand="lg" activeKey="/home">
            <Nav.Item>
            <Nav.Link className="text-white">&copy; Recode Pro 2020</Nav.Link>
            </Nav.Item>
        </Navbar>
    );
}