import React, { Component } from "react";
// import JobSeekerCard from "./JobSeekerCard";
import JobSeekerData from "./JobSeekerData";
import { Container, Jumbotron, Row } from "react-bootstrap";
import styles from "../../../CSS/Procedure.module.css";
import { withTranslation } from "react-i18next";
import { Card } from "react-bootstrap";

// extends: Inheritance uses the keyword extends to allow any component to use the properties and methods of another component connected with the parent. Using the extends keyword, you can allow the current component to access all the component's properties, including the function, and trigger it from the child component.
//  In function component we cannot include life cycle method directly and can be implemented using hooks.
class KnowAbout extends Component {
  constructor() {
    super();
    // Source: https://www.knowledgehut.com/blog/web-development/understanding-constructors-with-react-components
    // It is necessary to call super() within the constructor. To set property or use 'this' inside the constructor it is mandatory to call super().We should always include super() in order to use the parent class methods and properties.
    //Never Call API inside constructor.API is used in component did mount method
    this.state = {
      JobSeekerData,
    };
    // We must remember that the setState() method cannot be used directly in the constructor(). Use 'this.state' to assign the initial state in the constructor. The constructor uses this.state to assign initial state, and other methods should use set.state().
  }

  render() {

    // Render method: HTML Execute krke return krna and when any state or prop is changed then the render method is called automatically also at the creation of component render method is called at the beginning

    const { t } = this.props;
    // let JobSeekerData = this.state.JobSeekerData.map((data) => {
    //   return <JobSeekerCard key={data.id} data={data} />;
    // });

    return (
      <Jumbotron className={styles.Jumbotron}>
        <Container fluid="sm">
          <h2 id="howwework" className={styles.Heading}>
            {t("How we work for")}
            <span className={styles.About}> {t("Job Seeker")} </span>?
            {/* Both the tags (<div> and <span>) are used to represent the part of the webpage, <div> tag is used a as block part of the webpage and <span> tag */}
          </h2>
          <Row
            style={{ marginTop: "50px", justifyContent: "space-evenly" }}
          >
            {/* {JobSeekerData} */}
            <div id="procedure" className={styles.Box}>
              <Card
                style={{
                  width: "10.5rem",
                  borderRadius: "50%",
                  border: "#bd6997 solid 4px",
                  marginRight: "0px",
                  textAlign: "center"
                }}
              >
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/user.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("Register")}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div id="procedure" className={styles.Box}>
              <Card
                style={{
                  width: "10.5rem",
                  borderRadius: "50%",
                  border: "#bd6997 solid 4px",
                  marginRight: "0px",
                  textAlign: "center"
                }}
              >
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/search.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("View Jobs")}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div id="procedure" className={styles.Box}>
              <Card
                style={{
                  width: "10.5rem",
                  borderRadius: "50%",
                  border: "#bd6997 solid 4px",
                  marginRight: "0px",
                  textAlign: "center"
                }}
              >
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/check.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("Apply")}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>

            <div id="procedure" className={styles.Box}>
              <Card
                style={{
                  width: "10.5rem",
                  borderRadius: "50%",
                  border: "#bd6997 solid 4px",
                  marginRight: "0px",
                  textAlign: "center"
                }}
              >
                <Card.Img
                  variant="top"
                  src={require("../../../Assets/thumb.png")}
                  alt="Image"
                  className={styles.CardImage}
                />
                <Card.Body>
                  <div className={styles.Title}>
                    <Card.Title className={styles.CardTitle}>
                      {t("Get Hired")}
                    </Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default withTranslation()(KnowAbout);
