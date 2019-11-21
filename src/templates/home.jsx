import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import About from '../components/About/About';
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./listing.css";

class Home extends React.Component {

  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;

    return (
      <Layout>
          <div className="home-page">
            <About />
            <p>test</p>
            <div className="posts-container">
              <Helmet title={config.siteTitle} />
              <SEO />
              <PostListing postEdges={postEdges} />
            </div>
          </div>
      </Layout>
    );
  }
}

export default Home;

/* eslint no-undef: "off" */
export const homeQuery = graphql`
  query HomeQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;