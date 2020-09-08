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

  setEditModalShow = (state) => {
    this.setState({
      editModalShow: state,
    });
  };

  postTopicToServer = async (topic) => {
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
          clickEditModal={() => this.setEditModalShow(true)}
        />
        <Button variant="primary" onClick={() => this.setAddModalShow(true)}>
          Add Topic
        </Button>

        <AddTopicModal
          show={this.state.addModalShow}
          postTopicToServer={this.postTopicToServer}
          onHide={() => this.setAddModalShow(false)}
        />

        <EditTopicModal
          show={this.state.editModalShow}
          postTopicToServer={this.postTopicToServer}
          onHide={() => this.setAddModalShow(false)}
        />
      </Container>
    );
  }
}

export default App;
