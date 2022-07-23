import React from 'react';
import { createRoot } from 'react-dom/client';

// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from "regenerator-runtime";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  render() {
    const { } = this.state;

    return (
      <div className='container pt-5'>
          test
      </div>
    );
  }
}

if (document.getElementById('root')) {
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(<App />);
}