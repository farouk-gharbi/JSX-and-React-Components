
import './App.css';
import Card from 'react-bootstrap/Card';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
function App() {
  var name="farouk";
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Image />
        <Name />
        <Description />
        <Price />
      </Card>

      {
        name === "" ? <h2>Hello there</h2> : <h2>Hello {name} </h2>
      }
    </div>

  );
}

export default App;
