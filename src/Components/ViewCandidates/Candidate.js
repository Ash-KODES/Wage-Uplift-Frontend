import React, { Component } from "react";
import Navbar from "./Sections/Navbar";
import { Container, Jumbotron, Spinner } from "react-bootstrap";
import { CandidateCard } from "./Card";
import Header from "./Sections/Header";
import styles from "../../CSS/Electrician.module.css";
import axios from "axios";

class Candidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://pacific-taiga-02637.herokuapp.com/jobs/candidates/?CATEGORY=${this.props.category}`
      )
      .then(
        (res) => {
          const data = res.data;
          console.log(data);
          this.setState({ data });
        },
        (error) => {
          console.log(error);
          alert(error);
        }
      );
  }
// firstly constructor run and then the render.
// when any updation are perfomed whether in any component orr inside component did mount method then too also render method is called.
// Component did mount ka use hmesha api aur async jaisi cheeze ko call krne ke liye hota h kuki component di mount hmesha constructor aur render ke baad call hota h toh uss time tak saara html load ho chuka hota h.Toh agr hume api call time kucch html ya kisi cheez ki jrurat h toh asaani se ho jaata h.Agr constructor me call krte h h api toh uss time tak saaara html ni load hua hota h toh problem ho skti h.
// flow of call:  constructor-->render-->componentdidmount
// state update hone pee render aur componentdidUpdate chlta h aur componentdid mount bs ek baar jab saari html load ho jaayegi tb chlega means there is no effect of usestate and props changes in componentdidmount

// ComponentDidUpdate ke andar agr hum kucch update krre h toh condition lgaake krenge ni toh infinite loop chal jaayega kuki ComponentDidUpdate hrr baar jab state change hoti h tb call hota h
// If we are changing state inside render method then infinite loop happens so if we want to update any state then always do that in componentDidUpdate method

// ShouldComponentUpdate ask whether we want to update component or not.
// Use: ->We can stop special rendering i.e; supoose we want to update the component only when the value of something is something only otherwise we do not change it.Which increase our application performance
//ByDefault behavior of ShouldComponentUpdate is false i.e; by default it doesnt allow component to update
  render() {
    const { data } = this.state;

    if (data.length === 0 || !data) {
      return (
        <div>
          <Navbar />
          <Header title={this.props.category} />
          <h3
            style={{
              textAlign: "center",
              marginTop: "220px",
              marginBottom: "200px",
            }}
          >
            <Spinner animation="border" className={styles.Spinner} />
            {/* No opportunities, sorry! */}
          </h3>
        </div>
      );
    }

    return (
      <div>
        <Navbar />
        <div>
          <Header title={this.props.category} />
          <Jumbotron style={{ backgroundColor: "white" }}>
            <Container className={styles.Cards}>
              {data.candidates.map((item) => {
                return <CandidateCard key={item.id} item={item} />;
              })}
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export { Candidate };
