import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'
import Row from './row.jsx'

class Grid extends Component {
  static propTypes = {
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired,
  }

  render() {
    const { rows, cols } = this.props
    return (
      <div className={css(styles.grid)}>
        {(new Array(rows)).fill(0).map((_, i) =>
          <Row key={i} cols={cols} />
        )}
      </div>
    )
  }
}

export default Grid

const styles = StyleSheet.create({
  grid: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: '4px solid gray',
    borderBottom: 'none',
    borderRight: 'none',
  },
})
