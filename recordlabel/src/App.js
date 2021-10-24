import record from '../src/assets/images/record.png';
import './App.css';
import {BrowserRouter as  Router,Route, Switch }from 'react-router-dom'
import Home from './pages/home/home'
import Music from './pages/music/music'
import Merch from './pages/merch/merch'
import News from './pages/news/news'
import Videos from './pages/videos/videos'
import Artists from './pages/artists/artists';
import Banner from './components/banner';

function App() {
  return (
        <Router>
          <Switch>
    <div className="App">
      <Banner/>

          <Route exact path='/' component={Home}></Route>
          <Route exact path='/artists' component={Artists}></Route>
          <Route exact path='/music' component={Music}></Route>
          <Route exact path='/news' component={News}></Route>
          <Route exact path='/videos' component={Videos}></Route >
          <Route exact path='/merch' component={Merch}></Route>
      <header className="App-header">
        <img src={record} className="record" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
        </Switch>
      </Router>
  );
}

export default App;
