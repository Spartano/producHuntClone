import { Components, registerComponent, withCurrentUser } from "meteor/vulcan:core";
import React, { PropTypes, Component } from "react";
import classNames from "classnames";
import Helmet from "react-helmet";
import Col from "react-bootstrap/lib/Col";
import Panel from "react-bootstrap/lib/Panel";

const Layout = ({ currentUser, children, currentRoute }) => (
  <div className={classNames("wrapper", `wrapper-${currentRoute.name.replace(".", "-")}`)} id="wrapper">
    <Helmet>
      <link
        name="bootstrap"
        rel="stylesheet"
        type="text/css"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.5/css/bootstrap.min.css"
      />
      <link
        name="font-awesome"
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </Helmet>

    <Components.HeadTags />

    {currentUser ? <Components.UsersProfileCheck currentUser={currentUser} documentId={currentUser._id} /> : null}

    <Components.Header />

    <Components.Banner />
    

    <div className="main">
      <Components.FlashMessages />

      <Components.Newsletter />
      <Col xs={3}>
        <Components.CategoriesList />
      </Col>
      <Col xs={6}>{children}</Col>
      <Col xs={3}>
        <Panel header={"Title Panel"} bsStyle="primary">
        <Components.PostsViews />
        </Panel>
      </Col>
    </div>

    <Components.Footer />
  </div>
);

registerComponent("Layout", Layout, withCurrentUser);
