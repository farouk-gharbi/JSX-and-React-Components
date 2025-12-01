import Card from 'react-bootstrap/Card';
import products from '../products';
const Description=()=> {
    return(
        <Card.Text>
            {products.description}
        </Card.Text>
    );
}
export default Description;