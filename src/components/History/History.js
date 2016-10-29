import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './history.cssmodule.css';

@cssmodules(styles)
class History extends React.Component {

  render() {
    return (
      <div className="history-component" styleName="history-component">
        Please edit src/components//History.js to update this component!
      </div>
    );
  }
}

Object.assign(History, {
  displayName: 'History'
});

export default History;
