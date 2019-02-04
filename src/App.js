import React, { Component } from "react";
import chain from "./chain.svg";

import "./App.css";
import "../src/bootstrap/css/bootstrap.min.css";

import Layout from "../src/containers/Layout";
import Footer from "../src/components/Footer";
import Info from "../src/components/Info";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="col-md-12">
            <div className="row">
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
              <div className="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4">
                <h1 className="text-primary">
                  A visual approach to BlockChains using React
                </h1>
                <img src={chain} className="App-logo" alt="chain" />
                <Info/>
              </div>
              
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="row p-2">
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
              <div className="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4">
                <Layout />
              </div>
              <div className="col-1 col-sm-1 col-md-1 col-lg-4 col-xl-4" />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
