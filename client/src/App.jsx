import React from "react";
import { Container, Button } from "react-bootstrap";

import TopicList from "./components/TopicList.jsx";
import AddTopicModal from "./components/AddTopicModal.jsx";
import EditTopicModal from "./components/EditTopicModal.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      addModalShow: false,
      editModalShow: false,
      topicToEdit: {},
    };
  }

  componentDidMount() {
    this.getTopicsFromServer();
  }

  setAddModalShow = (state) => {
    // console.log("modal show triggered:", state);
    this.setState({
      addModalShow: state,
    });
  };

  setEditModalShow = (state, topic = {}) => {
    this.setState({
      editModalShow: state,
      topicToEdit: topic,
    });
  };

  createTopic = async (topic) => {
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
  };

  updateTopic = async (topic) => {
    console.log("update Topic called");
    try {
      await fetch("/topics", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(topic),
      });
      console.log("put/update success!");
      this.getTopicsFromServer();
    } catch (err) {
      console.log(err);
    }
  };

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
        <TopicList
          topics={this.state.topics}
          setEditModalShow={this.setEditModalShow}
        />
        <Button variant="primary" onClick={() => this.setAddModalShow(true)}>
          Add Topic
        </Button>

        <AddTopicModal
          show={this.state.addModalShow}
          createTopic={this.createTopic}
          onHide={() => this.setAddModalShow(false)}
        />

        <EditTopicModal
          show={this.state.editModalShow}
          topic={this.state.topicToEdit}
          updateTopic={this.updateTopic}
          onHide={() => this.setEditModalShow(false)}
        />
      </Container>
    );
  }
}

export default App;
