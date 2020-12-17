import { EventEmitter } from 'fbemitter'

const SERVER = 'http://localhost:8080'

class BookshelfStore {
  constructor () {
    this.data = []
    this.emitter = new EventEmitter()
  }

  async getAll() {
    try {
      const response = await fetch(`${SERVER}/bookshelves`)
      const data = await response.json()
      this.data = data
      this.emitter.emit('GET_ALL_SUCCESS')
    } catch (err) {
      console.warn(err)
      this.emitter.emit('GET_ALL_ERROR')
    }
  }

  async addOne(bookshelf) {
    try {
      await fetch(`${SERVER}/bookshelves`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookshelf)
      })
      this.getAll()
    } catch (err) {
      console.warn(err)
      this.emitter.emit('ADD_ONE_ERROR')
    }
  }

  async deleteOne(id) {
    try {
      await fetch(`${SERVER}/bookshelves/${id}`, {
        method: 'delete'
      })
      this.getAll()
    } catch (err) {
      console.warn(err)
      this.emitter.emit('DELETE_ONE_ERROR')
    }
  }

  async saveOne(id, bookshelf) {
    try {
      await fetch(`${SERVER}/bookshelves/${id}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookshelf)
      })
      this.getAll()
    } catch (err) {
      console.warn(err)
      this.emitter.emit('SAVE_ONE_ERROR')
    }
  }
}

const store = new BookshelfStore()

export default store