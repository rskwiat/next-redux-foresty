import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import withRedux from '~/lib/with-redux';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps } />
      </Provider>
    )
  }
}

export default withRedux(MyApp);