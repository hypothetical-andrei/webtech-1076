import React from 'react'

class BookshelfAddForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      row: '',
      column: ''
    }

    this.add = (evt) => {
      this.props.onAdd({
        row: this.state.row,
        column: this.state.column
      })
    }

    this.handleChange = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value
      })
    }
  }

  render () {
    return (
      <div>
        <div>
          <label htmlFor="row">Row</label>
          <input type="text" id="row" name="row" value={this.state.row} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="column">Column</label>
          <input type="text" id="column" name="column" value={this.state.column} onChange={this.handleChange} />
        </div>
        <div>
          <input type="button" value="add" onClick={this.add} />
        </div>
      </div>
    )
  }
}

export default BookshelfAddForm