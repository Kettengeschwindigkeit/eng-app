import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Thematic from './components/Thematic/Thematic';
import Xxxxx from './components/Xxxxx/Xxxxx';
import { Route } from 'react-router-dom';
import Count from './components/count/count';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route exact path='/' component={Content} />
        <Route path='/xxxxx' component={Xxxxx} />
        <Route path='/count' component={Count} />
        <Route path='/thematic/' render={() => <Thematic state={props.state} />} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
