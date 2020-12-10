import React from 'react'

class Bookshelf extends React.Component {
  render () {
    const { item } = this.props
    return (
      <div>
        <span>{item.row}</span>
        <span>{item.column}</span>
      </div>
    )
  }
}

export default Bookshelf