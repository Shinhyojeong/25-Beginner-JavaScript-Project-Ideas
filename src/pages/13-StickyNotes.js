import { Header, AddSticky, StickyNoteList } from '@domain/13-StickyNotes'
import { createElement } from '@utils/handleElement'

export default function StickyNotes({ targetEl }) {
  const stickyNotesEl = createElement()

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
    targetEl: stickyNotesEl,
    onOpen: () => {
      this.setState({
        ...this.state,
        modalVisible: true,
      })
    },
  })

  const addStick = new AddSticky({
    targetEl: stickyNotesEl,
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
    targetEl: stickyNotesEl,
    initialState: this.state.stickyList,
    onRemove: (id) => {
      this.setState({
        ...this.state,
        stickyList: this.state.stickyList.filter((sticky) => sticky.id !== id),
      })
    },
  })

  targetEl.append(stickyNotesEl)
}
