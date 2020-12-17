import React from 'react'
import BookStore from './BookStore'
import Book from './Book'
import BookAddForm from './BookAddForm'

class BookshelfDetails extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      books: []
    }

    this.cancel = () => {
      this.props.onCancel()
    }

    this.store = new BookStore(this.props.item)

    this.add = (book) => {
      this.store.addOne(book)
    } 

    this.delete = (id) => {
      this.store.deleteOne(id)
    } 
  }

  componentDidMount() {
    this.store.getAll()

    this.store.emitter.addListener('GET_ALL_SUCCESS', () => {
      this.setState({
        books: this.store.data
      })
    })
  }

  render () {
    return (
      <div>
        i will be the details for {this.props.item}
        <div>
          {
            this.state.books.map(e => <Book item={e} key={e.id} onDelete={this.delete} />)
          }
        </div>
        <BookAddForm onAdd={this.add} />
        <input type='button' value='cancel' onClick={this.cancel} />
      </div>
    )
  }
}

export default BookshelfDetails