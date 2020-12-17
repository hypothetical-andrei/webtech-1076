import { EventEmitter } from 'fbemitter'

const SERVER = 'http://localhost:8080'

class BookStore {
  constructor (bookshelfId) {
    this.bookshelfId = bookshelfId
    this.data = []
    this.emitter = new EventEmitter()
  }

  async getAll() {
    try {
      const response = await fetch(`${SERVER}/bookshelves/${this.bookshelfId}/books`)
      const data = await response.json()
      this.data = data
      this.emitter.emit('GET_ALL_SUCCESS')
    } catch (err) {
      console.warn(err)
      this.emitter.emit('GET_ALL_ERROR')
    }
  }

  async addOne(book) {
    try {
      await fetch(`${SERVER}/bookshelves/${this.bookshelfId}/books`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
      })
      this.getAll()
    } catch (err) {
      console.warn(err)
      this.emitter.emit('ADD_ONE_ERROR')
    }
  }

  async deleteOne(id) {
    try {
      await fetch(`${SERVER}/bookshelves/${this.bookshelfId}/books/${id}`, {
        method: 'delete'
      })
      this.getAll()
    } catch (err) {
      console.warn(err)
      this.emitter.emit('DELETE_ONE_ERROR')
    }
  }

  async saveOne(id, book) {
    try {
      await fetch(`${SERVER}/bookshelves/${this.bookshelfId}/books/${id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
      })
      this.getAll()
    } catch (err) {
      console.warn(err)
      this.emitter.emit('SAVE_ONE_ERROR')
    }
  }
}

export default BookStore