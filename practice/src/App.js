import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';
import Geek from './Components/Geek';
import Car from './Components/Car';
import FormData from './Components/FormData';
import Login from './Components/Login/Login ';
import ListandKey from './Components/Listandkey/ListandKey';
import Stylesheet from './Components/Styleshee/Stylesheet';
import MemoComponents from './Components/Memo/MemoComponents';
import Usecallback from './Components/Callback/Usecallback';
import UseRef from './Components/UseRef/UseRef';
import Higherorder from './Components/HOC/Higherorder';

function App() {
  return (
    <div className="App">
      <Higherorder></Higherorder>
      {/* <Usecallback></Usecallback>
      <UseRef></UseRef>
      <MemoComponents name="Vishesh"></MemoComponents>
      <Stylesheet primary={true}></Stylesheet>
      <Login></Login>
      <FormData></FormData>
      <Car></Car>
      <Geek name="Dhruvil" holdername="Vandan"></Geek>
      <Hello></Hello>
      <ListandKey></ListandKey> */}
    </div>
  );
}

export default App;
