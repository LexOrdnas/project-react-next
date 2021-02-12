import Product from '../Components/Product';
import { Row } from 'react-bootstrap';
import Categories from '../Components/Product/categories.js';

export default function ViewProduct() {

    return (
        <Row>
            <Categories />
            <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                <Product />
            </div>
        </Row>
    );
}