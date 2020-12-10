import React from 'react'
import Bookshelf from './Bookshelf'
import BookshelfAddForm from './BookshelfAddForm'
import store from './BookshelfStore'

class App extends React.Component {

  constructor () {
    super()

    this.state = {
      bookshelves: []
    }

    this.add = (bookshelf) => {
      store.addOne(bookshelf)
    }
  }

  componentDidMount () {
    store.getAll()
    store.emitter.addListener('GET_ALL_SUCCESS', () => {
      this.setState({
        bookshelves: store.data
      })
    })
  }

  render () {
    return (
      <div>
        {
          this.state.bookshelves.map(e => <Bookshelf key={e.id} item={e} />)
        }
        <BookshelfAddForm onAdd={this.add} />
      </div>
    ) 
  }
}

export default App
