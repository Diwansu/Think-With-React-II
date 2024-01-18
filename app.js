class ReactContainer extends React.Component {
  // JSX tags
  // JSX there should be one parent element
  render() {
    return (
      <div>
        Hello! Welcome to Kalvium
        <div>This is babel</div>
      </div>
    );
  }
}

const container = document.getElementById("react-container");
ReactDOM.render(<ReactContainer />, container);
