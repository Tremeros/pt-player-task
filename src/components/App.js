import React from "react";
import Header from "./header";
import Song from "./song";
import Buttons from "./buttons";
import Footer from "./footer";
import Progress from "./progres";

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Song />
        <Buttons />
        <Progress />
        <Footer />
      </div>
    );
  }
}

export default App;
