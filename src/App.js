import React from 'react';
import Header from './components/Header/Header';
import NavigationBar from './components/NavigationBar/NavigationBar.jsx';
import Projects from './components/Projects/Projects';
import Tech from './components/Tech/Tech';
import Writings from './components/Writings/Writings';
import Footer from './components/Footer/Footer';
import { StyleProvider } from './StyleContext';
import './App.css';
import './fonts/stylesheet.css'

function App() {

  const [styleSelection, setStyleSelection] = React.useState(null);

  const changeStyle = (style) => {
    setStyleSelection(style)
  }  

  return (
    <StyleProvider value={{style: styleSelection, changeStyle: changeStyle}}>
      <div className={styleSelection}>
        <Header />
        <NavigationBar/>
        <Projects />
        <Tech />
        <Writings />
        <Footer />
      </div>
    </StyleProvider>
  );
}

export default App;
