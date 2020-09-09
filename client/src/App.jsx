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
      const response = await fetch("/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(topic),
      });
      if (!response.ok) {
        return;
      }
      this.getTopicsFromServer();
    } catch (err) {
      console.log(err);
    }
  };

  updateTopic = async (topic) => {
    try {
      const response = await fetch("/topics", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(topic),
      });
      if (!response.ok) {
        return;
      }
      this.getTopicsFromServer();
    } catch (err) {
      console.log(err);
    }
  };

  deleteTopic = async (topic) => {
    try {
      const response = await fetch("/topics", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(topic),
      });
      if (!response.ok) {
        return;
      }
      this.getTopicsFromServer();
    } catch (err) {
      console.log(err);
    }
  };

  updateRating = async (rating) => {
    try {
      const response = await fetch("/ratings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rating),
      });
    } catch (err) {
      console.log(err);
    }
  };

  getTopicsFromServer = async () => {
    try {
      const response = await fetch("/topics");
      if (!response.ok) {
        return;
      }
      const topics = await response.json();
      this.setState({
        topics,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <h1>The Ultimate TA Study Guide</h1>
        <hr />
        <TopicList
          topics={this.state.topics}
          updateRating={this.updateRating}
          setEditModalShow={this.setEditModalShow}
        />
        <hr />
        <div className="d-flex justify-content-center m-4">
          <Button variant="primary" onClick={() => this.setAddModalShow(true)}>
            Add New Topic
          </Button>
        </div>

        <AddTopicModal
          show={this.state.addModalShow}
          createTopic={this.createTopic}
          onHide={() => this.setAddModalShow(false)}
        />

        <EditTopicModal
          show={this.state.editModalShow}
          topic={this.state.topicToEdit}
          updateTopic={this.updateTopic}
          deleteTopic={this.deleteTopic}
          onHide={() => this.setEditModalShow(false)}
        />
      </Container>
    );
  }
}

export default App;
