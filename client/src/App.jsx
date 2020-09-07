import React from "react";
import TopicList from "./components/TopicList.jsx";
import { Modal, Button } from "react-bootstrap";

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
          Launch vertically centered modal
        </Button>

        <MyVerticallyCenteredModal
          show={this.state.modalShow}
          onHide={() => this.setModalShow(false)}
        />
      </>
    );
  }
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default App;
