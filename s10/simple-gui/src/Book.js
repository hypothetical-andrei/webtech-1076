import React from 'react'

class Book extends React.Component {
  constructor (props) {
    super(props)

    this.delete = () => {
      this.props.onDelete(this.props.item.id)
    }
  }
  render () {
    const { item } = this.props
    return (
      <div>
        <h2>{item.title}</h2>
        <h4>{item.genre}</h4>
        <div>
          <input type='button' value='delete' onClick={this.delete} />
        </div>
      </div>
    )
  }
}

export default Book