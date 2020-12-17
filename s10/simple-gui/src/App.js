import React from 'react'
import Bookshelf from './Bookshelf'
import BookshelfAddForm from './BookshelfAddForm'
import BookshelfDetails from './BookshelfDetails'
import store from './BookshelfStore'

class App extends React.Component {

  constructor () {
    super()

    this.state = {
      bookshelves: [],
      selected: 0
    }

    this.add = (bookshelf) => {
      store.addOne(bookshelf)
    }

    this.delete = (id) => {
      store.deleteOne(id)
    }

    this.save = (id, bookshelf) => {
      store.saveOne(id, bookshelf)
    }

    this.select = (id) => {
      this.setState({
        selected: id
      })
    }

    this.cancel = () => {
      this.setState({
        selected: 0
      })
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
    if (this.state.selected === 0) {
      return (
        <div>
          {
            this.state.bookshelves.map(e => <Bookshelf key={e.id} item={e} onDelete={this.delete} onSave={this.save} onSelect={this.select} />)
          }
          <BookshelfAddForm onAdd={this.add} />
        </div>
      ) 
    } else {
      return <BookshelfDetails item={this.state.selected} onCancel={this.cancel} />
    }
  }
}

export default App
