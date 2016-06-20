import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

class Settings extends Component {
  static propTypes = {
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  handleChange(attr, value) {
    const num = parseInt(value, 10)
    if (!isNaN(num)) {
      const { rows, cols, onChange } = this.props
      const data = { rows, cols }
      data[attr] = num
      onChange(data)
    }
  }

  render() {
    const { rows, cols } = this.props
    return (
      <div className={css(styles.container)}>
        <label htmlFor="rows">
          Rows
        </label>
        <input
          id="rows"
          className={css(styles.input)}
          type="number"
          value={rows}
          onChange={e => this.handleChange('rows', e.target.value)}
        />
        <label htmlFor="columns">
          Columns
        </label>
        <input
          id="columns"
          className={css(styles.input)}
          type="number"
          value={cols}
          onChange={e => this.handleChange('cols', e.target.value)}
        />
      </div>
    )
  }
}

export default Settings

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: 20,
  },
  input: {
    margin: '0 10px',
    padding: '4px 6px',
  },
})
