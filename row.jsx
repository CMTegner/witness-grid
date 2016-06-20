import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'
import Col from './col.jsx'

class Row extends Component {
  static propTypes = {
    cols: PropTypes.number.isRequired,
  }

  render() {
    const { cols } = this.props
    return (
      <div className={css(styles.row)}>
        {(new Array(cols)).fill(0).map((_, i) =>
          <Col key={i} />
        )}
      </div>
    )
  }
}

export default Row

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexGrow: 1,
  },
})
