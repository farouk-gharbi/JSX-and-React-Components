import Card from 'react-bootstrap/Card';
import products from '../products';
const Name=()=> {
    return(
        <Card.Title>{products.name}</Card.Title>
    );
}
export default Name;