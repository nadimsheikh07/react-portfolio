import React, { Component } from 'react';
import { DefaultRoutes } from './router';
import { WebLayout } from './layouts/website';

class App extends Component {
  render() {
    return (
      <WebLayout>
        <DefaultRoutes />
      </WebLayout>
    );
  }
}

export default App;
