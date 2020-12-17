import React from 'react'

class Bookshelf extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isEditing: false,
      row: this.props.item.row,
      column: this.props.item.column
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

    this.save = () => {
      this.props.onSave(this.props.item.id, {
        row: this.state.row,
        column: this.state.column
      })

      this.setState({
        isEditing: false
      })
    }

    this.handleChange = (evt) => {
      this.setState({
        [evt.target.name]: evt.target.value
      })
    }

    this.select = () => {
      this.props.onSelect(this.props.item.id)
    }
  }

  render () {
    const { item } = this.props
    return (
      <div>
        {
          this.state.isEditing ? 
            <>
              <span>
                <input type='text' value={this.state.row} name='row' onChange={this.handleChange} />
              </span>
              <span>
                <input type='text' value={this.state.column} name='column' onChange={this.handleChange} />
              </span>
              <span>
                <input type='button' value='cancel' onClick={this.cancel} />
                <input type='button' value='save' onClick={this.save} />
              </span>
            </>
          :
            <>
              <span>{item.row}</span>
              <span>{item.column}</span>
              <span>
                <input type='button' value='delete' onClick={this.delete} />
                <input type='button' value='edit' onClick={this.edit} />
                <input type='button' value='select' onClick={this.select} />
              </span>
            </>
        }
      </div>
    )
  }
}

export default Bookshelf