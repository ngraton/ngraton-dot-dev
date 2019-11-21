import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import App from "../App";
import config from "../../data/SiteConfig";

class Index extends Component {
  render() {
    return (
      <Layout>
        <div className="app-container">
          <Helmet title={`App | ${config.siteTitle}`} />
          <App />
        </div>
      </Layout>
    );
  }
}

export default Index;
