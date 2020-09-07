import React from "react";
import TopicList from "./components/TopicList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
    };
  }

  componentWillMount() {
    this.getTopics();
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
      </>
    );
  }
}

export default App;
