import React from "react";
import TopicList from "./components/TopicList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
    };
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
