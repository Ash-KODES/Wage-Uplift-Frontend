import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import styles from "../../CSS/ApplyJob.module.css";
import { withTranslation } from "react-i18next"; // https://react.i18next.com/latest/withtranslation-hoc

class ApplyJob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aadharNumber: "",
    };
  }
  /*
  setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state.

  https://reactjs.org/docs/react-component.html#setstate
  */
  handleChange = (event) => {
    let itemValue = event.target.value;
    this.setState({
      [event.target.name]: itemValue,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();// console.log("From handleSubmit", this.state.aadharNumber);
    /* we can change default behaviour of any element or DOM ,then add .preventDefault() method.
    like this can prevent single click on link by adding some condition,etc.
    link--https://www.youtube.com/watch?v=CIlKnb5Yy7o
    */

    
    /* we can use axios in place of fetch API (upgraded version)
       axios- It is lightweight pakage and use to request HTTP request
       https://www.youtube.com/watch?v=Gl-vOU7ZU9A
       
      Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.
      */
    axios
      .post(// we can use .get in place of .post
        `https://pacific-taiga-02637.herokuapp.com/jobs/${this.props.jobId}/apply`,
        {
          aadharNumber: this.state.aadharNumber,
        }
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const data = response.data;  // data mein saara data fill ho jayega
          //   console.log(data);
          this.setState({ data });
          alert(`Your application has been sent.`);
          // setTimeout(() => {
          //   window.location.href = "/";
          // }, 2000);
        }
      })
      .catch((error) => {
        alert(`Please register before applying!`);
        console.log(error);
        // setTimeout(() => {
        //   window.location.href = "/user/register";
        // }, 2000);
      });

    this.setState({
      aadharNumber: "",
    });
  };

  render() {
    const { aadharNumber } = this.state;
    const { handleClose, t } = this.props;

    return (
      <div className={styles.PopUpBox}>
        <div className={styles.Box}>
          <span className={styles.CloseIcon} onClick={handleClose}>
            x
          </span>
          <p>
            {" "}
            {t("If you haven't registered yet, please ")}
            <Link to={"/user/register"}>{t("register")} </Link>
            {t("before applying.")} /* this is use to translation of language */
          </p>
        
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                name="aadharNumber"
                value={aadharNumber}
                placeholder="Enter your AADHAR Number"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button className={styles.Button} type="submit">
              {t("Submit")}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default withTranslation()(ApplyJob);
