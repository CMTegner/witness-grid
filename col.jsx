import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

const colors = ['transparent', 'red', 'blue', 'green', 'yellow', 'pink', 'orange', 'black']

class Col extends Component {
  constructor(...args) {
    super(...args)
    this.state = { color: colors[0] }
  }

  handleClick() {
    let { color } = this.state
    color = colors[(colors.indexOf(color) + 1) % colors.length]
    this.setState({ color })
  }
  
  render() {
    const { color } = this.state
    return (
      <div
        className={css(styles.col)}
        style={{ backgroundColor: color }}
        onClick={this.handleClick.bind(this)}
      />
    )
  }
}

export default Col

const styles = StyleSheet.create({
  col: {
    flexGrow: 1,
    border: '4px solid gray',
    borderTop: 'none',
    borderLeft: 'none',
  },
})
