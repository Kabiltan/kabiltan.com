import React, { Component } from 'react';
import { Helmet } from 'react-helmet';


class Head extends Component {
  render() {
    return (
      <Helmet>
        <meta charset='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#282c34' />
        <meta
          name='description'
          content="I'm Kabiltan Kalaichelvan, a Computer Engineering student at The University of Wisconsin-Madison."
        />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
        <title>Kabiltan Kalaichelvan</title>
      </Helmet>
    );
  }
}

export default Head;
