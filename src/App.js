import React from "react";
import "./scss/main.scss";
import { Header, Footer } from "./components";
import { Container } from "./layouts/Container.jsx";
import  "./test.js";




function App() {
  return (
    <div className="ui-wrapper">
      <Header />
      <div className="ui-content-wrapper">
        <Container>
          <p className="text-2xl">template</p>
        </Container>
      </div>
      <Footer />
    </div>
  );
}


export default App;
