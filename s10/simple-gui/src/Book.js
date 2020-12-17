import React from 'react'

class Book extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isEditing: false,
      title: this.props.item.title,
      genre: this.props.item.genre
    }

    this.delete = () => {
      this.props.onDelete(this.props.item.id)
    }

    this.edit = () => {
      this.setState({
        isEditing: true
      })
    }

    this.cancel = () => {
      this.setState({
        isEditing: false
      })
    }

    this.handleChange = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value
      })
    }

    this.save = () => {
      this.props.onSave(this.props.item.id, {
        title: this.state.title,
        genre: this.state.genre
      })
      this.setState({
        isEditing: false
      })
    }
  }
  render () {
    const { item } = this.props
    return (
      <div>
        {
          this.state.isEditing ?
            <>
              <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange} />
              <input type="text" id="genre" name="genre" value={this.state.genre} onChange={this.handleChange} />
              <input type='button' value='cancel' onClick={this.cancel} />
              <input type='button' value='save' onClick={this.save} />

            </>
          :
            <>
              <h2>{item.title}</h2>
              <h4>{item.genre}</h4>
              <div>
                <input type='button' value='delete' onClick={this.delete} />
                <input type='button' value='edit' onClick={this.edit} />
              </div>
            </>
        }
      </div>
    )
  }
}

export default Book