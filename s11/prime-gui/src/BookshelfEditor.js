import React from 'react'
import store from './BookshelfStore'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'

import './BookshelfEditor.css'

class BookshelfEditor extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      bookshelves: [],
      isAddDialogShown: false,
      bookshelf: {
        row: '',
        column: ''
      }
    }

    this.hideAddDialog = () => {
      this.setState({
        isAddDialogShown: false
      })
    }

    this.showAddDialog = () => {
      this.setState({
        isAddDialogShown: true
      })
    }

    this.handleBookshelfChange = (evt) => {
      const bookshelf = this.state.bookshelf
      bookshelf[evt.target.name] = evt.target.value
      this.setState({
        bookshelf: bookshelf
      })
    }

    this.save = () => {
      store.addOne(this.state.bookshelf)
      this.hideAddDialog()
    }

    this.tableFooter = (
      <div className='centered'>
        <Button icon='pi pi-plus' className='p-button-rounded p-button-outlined' onClick={this.showAddDialog} />
      </div>
    )

    this.addDialogFooter = (
      <div className='centered'>
        <Button label='save' icon='pi pi-save' className='p-button-rounded p-button-outlined' onClick={this.save} />
      </div>
    )
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
      <div className='bookshelf-editor'>
        <DataTable value={this.state.bookshelves} header='Booshelves' footer={this.tableFooter}>
          <Column field='row' header='Row' />
          <Column field='column' header='Column' />
        </DataTable>
        <Dialog   header='Add a bookshelf' 
                  visible={this.state.isAddDialogShown}
                  className='p-fluid'
                  footer={this.addDialogFooter}
                  onHide={this.hideAddDialog}>
          <div className='p-field'>
            <label htmlFor="row">Row</label>
            <InputText type="text" id="row" name="row" value={this.state.bookshelf.row} onChange={this.handleBookshelfChange} />
          </div>
          <div className='p-field'>
            <label htmlFor="column">Column</label>
            <InputText type="text" id="column" name="column" value={this.state.bookshelf.column} onChange={this.handleBookshelfChange} />
          </div>
        </Dialog>
      </div>
    )
  }
}

export default BookshelfEditor
