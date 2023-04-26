import logo from './logo.svg';
import './App.css';
import UseList from './components/UseList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
    <Navigation/>
    <UseList/>

    </div>
  );
}

export default App;
