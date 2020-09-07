import React from "react";
import { Container, Button } from "react-bootstrap";

import TopicList from "./components/TopicList.jsx";
import AddTopicModal from "./components/AddTopicModal.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      modalShow: false,
    };
    this.postTopicToServer = this.postTopicToServer.bind(this);
  }

  componentDidMount() {
    this.getTopicsFromServer();
  }

  setModalShow(state) {
    // console.log("modal show triggered:", state);
    this.setState({
      modalShow: state,
    });
  }

  async postTopicToServer(topic) {
    try {
      await fetch("/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(topic),
      });
      console.log("post success!");
      this.getTopicsFromServer();
    } catch (err) {
      console.log(err);
    }
  }

  async getTopicsFromServer() {
    try {
      const response = await fetch("/topics");
      const topics = await response.json();
      this.setState({
        topics,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Container>
        <h1>The Ultimate TA Study Guide</h1>
        <TopicList topics={this.state.topics} />
        <Button variant="primary" onClick={() => this.setModalShow(true)}>
          Add Topic
        </Button>

        <AddTopicModal
          show={this.state.modalShow}
          postTopicToServer={this.postTopicToServer}
          onHide={() => this.setModalShow(false)}
        />
      </Container>
    );
  }
}

export default App;
