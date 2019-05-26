import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { readEvents } from '../actions'

class EventsIndex extends Component{
  // componentがマウントされた時に実行
  componentDidMount() {
    console.log('hi')
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id} >
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    const props = this.props

    return (
      <>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <thead>
            {this.renderEvents()}
          </thead>
        </table>
      </>
    )
  }
}
const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex) 
