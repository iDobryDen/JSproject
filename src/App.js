import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import ListDetail from './components/ListDetail/ListDetail';

function App() {

    return (

    <div className="App">
        <Header />
        <Search />
        <ListDetail />
    </div>
  );
}

export default App;
