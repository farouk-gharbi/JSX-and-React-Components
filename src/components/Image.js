import Card from 'react-bootstrap/Card';
import products from '../products';
const Image=()=> {
    return(
        <Card.Img variant="top" src={products.image} alt='NOT FOUND' />
    );
}
export default Image;