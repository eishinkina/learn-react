import React from "react";
import { Container } from "../../layouts/Container";
import { Link } from "react-router-dom";


const NotFoundPage = () => {
  return (
    <Container>
      <h1 className="ui-title-1 mb4">404 - not found</h1>
      <p>Page not founder. Visit {'  '}<Link className="ui-link" to='/'>Home page</Link>.</p>
    </Container>
  );
};


export default NotFoundPage;
