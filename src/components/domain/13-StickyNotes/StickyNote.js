import { Text } from '@base'

export default function StickyNote({ targetEl, initialState }) {
  this.state = initialState

  const stickyNoteEl = document.createElement('div')
  stickyNoteEl.className = 'sticky-note'
  stickyNoteEl.setAttribute('data-id', this.state.id)

  new Text({
    targetEl: stickyNoteEl,
    initialState: {
      containerType: 'span',
      className: 'sticky-note-text',
      content: this.state.note,
    },
  })

  targetEl.append(stickyNoteEl)
}
