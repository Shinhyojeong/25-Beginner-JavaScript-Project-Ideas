import Header from './domain/Header.js'
import AddSticky from './domain/AddSticky.js'
import StickyNoteList from './domain/StickyNoteList.js'

export default function ({ targetEl }) {
  this.state = {
    modalVisible: false,
    stickyList: [],
    lastNumber: 0,
  }

  this.setState = (nextState) => {
    this.state = nextState
    addStick.setState(this.state.modalVisible),
      stickyNoteList.setState(this.state.stickyList)
  }

  new Header({
    targetEl,
    onOpen: () => {
      this.setState({
        ...this.state,
        modalVisible: true,
      })
    },
  })

  const addStick = new AddSticky({
    targetEl,
    initialState: this.state.modalVisible,
    onClose: () => {
      this.setState({
        ...this.state,
        modalVisible: false,
      })
    },
    onSubmit: (note) => {
      const { stickyList, lastNumber } = this.state

      const newSticky = {
        id: lastNumber,
        note: note.slice(0, -1),
      }

      this.setState({
        ...this.state,
        stickyList: [...stickyList, newSticky],
        lastNumber: lastNumber + 1,
      })
    },
  })

  const stickyNoteList = new StickyNoteList({
    targetEl,
    initialState: this.state.stickyList,
    onRemove: (id) => {
      this.setState({
        ...this.state,
        stickyList: this.state.stickyList.filter((sticky) => sticky.id !== id),
      })
    },
  })
}
