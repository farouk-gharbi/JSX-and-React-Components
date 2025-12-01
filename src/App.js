
import './App.css';
import Card from 'react-bootstrap/Card';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
function App() {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Image />
        <Name />
        <Description />
        <Price />
      </Card>
    </div>
  );
}

export default App;
