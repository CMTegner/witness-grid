import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite' 
import Settings from './settings.jsx'
import Grid from './grid.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: 5, cols: 4 }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange({ rows, cols }) {
    this.setState({ rows, cols })
  }

  render() {
    const { rows, cols } = this.state
    return (
      <div className={css(styles.container)}>
        <Settings
          rows={rows}
          cols={cols}
          onChange={this.handleChange}
        />
        <Grid
          rows={rows}
          cols={cols}
        />
      </div>
    )
  }
}

export default App

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    maxWidth: 800,
    padding: 20,
    margin: '0 auto',
  },
})
