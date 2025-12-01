import Button from 'react-bootstrap/Button';
import products from '../products';
const Price=()=> {
    return(
        <Button variant="primary">{products.price}</Button>
    );
}
export default Price;