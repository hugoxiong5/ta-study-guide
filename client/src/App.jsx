import React from "react";
import { Button } from "react-bootstrap";

import TopicList from "./components/TopicList.jsx";
import AddTopicModal from "./components/AddTopicModal.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      modalShow: false,
    };
  }

  componentDidMount() {
    this.getTopics();
  }

  setModalShow(state) {
    // console.log("modal show triggered:", state);
    this.setState({
      modalShow: state,
    });
  }

  async getTopics() {
    try {
      const response = await fetch("/topics");
      const topics = await response.json();
      console.log(topics);
      this.setState({
        topics,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <h1>Study Guide</h1>
        <h2>Topics</h2>
        <TopicList topics={this.state.topics} />
        <Button variant="primary" onClick={() => this.setModalShow(true)}>
          Add Topic
        </Button>

        <AddTopicModal
          show={this.state.modalShow}
          onHide={() => this.setModalShow(false)}
        />
      </>
    );
  }
}

export default App;
