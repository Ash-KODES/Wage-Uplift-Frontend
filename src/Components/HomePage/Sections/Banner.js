import React from "react";
import styles from "../../../CSS/Banner.module.css";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";
// Jumbotron: was introduced in Bootstrap 3 as a big padded box for calling extra attention to some special        content or information.A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.
import { Link } from "react-router-dom";

// Router: The Router in React JS is primarily used to create Single Page Web Apps
// A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a <Link> renders an accessible <a> element with a real href that points to the resource it's linking to. 
import BannerImage from "../../../Assets/banner.svg";
import { withTranslation } from "react-i18next";
// Higher Order Component(HOC): its a component which takes another component as a prop and return a component as a ouput.Suppose we want to make 3 counter namely red blue green then what we will do is firstly create one counter component which in general do the incrementation in value then we will design 3 higher order component in which we will pass props as the counter component and use only color as different style in each higher order component

function Banner({ t }) {
  return (
    // fluid jumbotron is used to span the width of the page i.e, To make the jumbotron full width, and without rounded corners,.
    <Jumbotron id="home" className={styles.Jumbotron} fluid>

      <Container className={styles.Container}>
        {/*About Container:https://www.geeksforgeeks.org/react-bootstrap-container-row-and-col-component/ */}
        <Row>
          <Col md={6} lg={6} className={styles.leftCol}>
            <h1 className={styles.Heading}>
              {t("Roz")}
              <span style={{ color: "#008dc8" }}>{t("gaar")} </span>
            </h1>
            <div className={styles.Rectangle} />
            <h2 className={styles.TagLine}>
              {t("Join your hands together.")}
              <br></br>
              {t("Not to beg, but to welcome")}
              <br></br>
              {t("new opportunities!")}
            </h2>
            <Row>
              <Col>
                <p className={styles.SubHeading}>{t("Employer")}</p>
                <p style={{ textAlign: "justify" }}>
                  <a href="#categories">{t("See available candidates")}</a>{" "}
                  {t("or")} <Link to="/jobs/post">{t("Post New Job")}</Link>{" "}
                  {t("if you don't find any")}
                  {t("suitable candidates")}
                </p>
              </Col>
              <Col>
                <p className={styles.SubHeading}>{t("Job Seeker")}</p>
                <p style={{ textAlign: "justify" }}>

                  {/* Justify: Like of newspaper and every left and right margin is staright */}
                  <Link to="/user/register">{t("Register")}</Link>{" "}
                  {t("your profile and get hired or manually")}{" "}
                  <a href="#categories"> {t("apply")}</a> {t("to jobs.")}
                </p>
              </Col>
            </Row>

            <a href="#categories">
              <button className={styles.Button}>{t("Explore")}</button>
            </a>
          </Col>
          <Col md={6} lg={6} className={styles.rightCol}>
            <Image
              className={styles.BannerImage}
              src={BannerImage}
              alt="BannerImage"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default withTranslation()(Banner);
