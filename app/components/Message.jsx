import React from 'react'

export default class Message extends React.Component {
  propTypes: {
    showing: React.PropTypes.string
  }

  render() {
    return <div>{this.props.showing}</div>
  }
}
