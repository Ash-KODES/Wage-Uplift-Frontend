import React from "react";
import { Container, Jumbotron, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
// React Router DOM is an npm package that enables you to implement dynamic routing in a web app. 
// It allows you to display pages and allow users to navigate them. 
// It is a fully-featured client and server-side routing library for React
// Link component is used to create links to different routes
// more can be found here->https://www.geeksforgeeks.org/what-is-react-router-dom/#:~:text=React%20Router%20DOM%20is%20an,side%20routing%20library%20for%20React.
import Logo from "../../Assets/logo.PNG";
import styles from "../../CSS/Footer.module.css";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
} from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { useTranslation } from "react-i18next";
//  React Icons is also an open-source library that 
// can bring all the icons present in the world of applications all at once place in one directory.

function Footer() {
  // useTranslation()->used to convert any text from one language to another
  const { t } = useTranslation();

  return (
    // jumbotron -> https://www.youtube.com/watch?v=P3RiSG77HV8      (detailed explanation)
    // A jumbotron indicates a big grey box for calling extra attention to some special content or information.
    <Jumbotron id="contact" className={styles.Jumbotron}>
      <Container className={styles.Container}>
        <Row className={styles.Top1}>
          <Col>
            <Image className={styles.Logo} src={Logo} alt="Logo" />
          </Col>
          <Col className={styles.Column}>
            <h5 className={styles.Border}> {t("links")} </h5>
            <p> {t("Terms and Condition")} </p>
            <p> {t("Privacy Policy")} </p>
          </Col>
          <hr className={styles.line2} />
          <Col className={styles.Column}>
            <h5 className={styles.Border}> {t("Services")} </h5>
            <p> {t("Hire Blue Collars")} </p>
            <p> {t("Get Jobs")} </p>
          </Col>
          <hr className={styles.line2} />
          <Col className={styles.Column}>
            <h5 className={styles.Border}> {t("Contact Us")} </h5>
            <Row>
              <Col md={10}>
                <p>
                  {" "}
                  <FaPhoneAlt /> XXXXX-XXXXX{" "}
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={10}>
                <p>
                  {" "}
                  <GrMail /> contact@gmail.com{" "}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <Row className = {styles.Top2}>
                <Col>
                    <Image 
                        className = {styles.Logo}
                        src = {Logo}
                        alt = "Logo"
                    />
                </Col>
            </Row> */}
        <Row className={styles.Top2}>
          <Col>
            <h5 style={{ textDecoration: "underline" }}> {t("links")} </h5>
            <p> {t("Terms and Condition")} </p>
            <p> {t("Privacy Policy")} </p>
          </Col>
          <Col>
            <h5 style={{ textAlign: "end", textDecoration: "underline" }}>
              {" "}
              {t("Services")}{" "}
            </h5>
            <p style={{ textAlign: "end" }}> {t("Hire Blue Collars")} </p>
            <p style={{ textAlign: "end" }}> {t("Get Jobs")} </p>
          </Col>
        </Row>
        <Row className={styles.Top2}>
          <Col className={styles.Top3}>
            <h5 style={{ textDecoration: "underline" }}> {t("Contact Us")} </h5>
            <Row>
              <Col>
                <p>
                  {" "}
                  <FaPhoneAlt /> XXXXX-XXXXX{" "}
                </p>
              </Col>
              <Col>
                <p>
                  {" "}
                  <GrMail /> contact@gmail.com{" "}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr className={styles.line1} />
        <Row className={styles.Bottom1}>
          <Col>
            <p>
              {" "}
              <BiCopyright /> 2021 Rozgaar | All rights reserved.
            </p>
          </Col>
          <Col className={styles.SocialLinks}>
            <Link to="https://www.linkedin.com/" className={styles.Shift}>
              {" "}
              <FaLinkedinIn />{" "}
            </Link>
            <Link to="https://www.instagram.com/" className={styles.Shift}>
              {" "}
              <FaInstagram />{" "}
            </Link>
            <Link to="https://twitter.com/" className={styles.Shift}>
              {" "}
              <FaTwitter />{" "}
            </Link>
          </Col>
        </Row>
        <Row className={styles.Bottom2}>
          <Col>
            <p className={styles.Para}>
              {" "}
              <BiCopyright /> 2020 Girl Code It | All rights reserved.
            </p>
          </Col>
        </Row>
        <Row className={styles.Bottom2}>
          <Col className={styles.SocialLinks}>
            <Link to="https://www.linkedin.com/" className={styles.Shift}>
              {" "}
              <FaLinkedinIn />{" "}
            </Link>
            <Link to="https://www.instagram.com/" className={styles.Shift}>
              {" "}
              <FaInstagram />{" "}
            </Link>
            <Link to="https://twitter.com/" className={styles.Shift}>
              {" "}
              <FaTwitter />{" "}
            </Link>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Footer;
