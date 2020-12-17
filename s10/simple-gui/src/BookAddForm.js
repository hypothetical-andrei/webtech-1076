import React from 'react'

class BookAddForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      genre: ''
    }

    this.add = (evt) => {
      this.props.onAdd({
        title: this.state.title,
        genre: this.state.genre
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
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <input type="text" id="genre" name="genre" value={this.state.genre} onChange={this.handleChange} />
        </div>
        <div>
          <input type="button" value="add" onClick={this.add} />
        </div>
      </div>
    )
  }
}

export default BookAddForm