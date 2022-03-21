import { Text, Button } from '@base'

export default function Header({ targetEl, onOpen }) {
  const headerEl = document.createElement('div')
  headerEl.className = 'header'

  this.render = () => {
    new Text({
      targetEl: headerEl,
      initialState: {
        containerType: 'div',
        content: 'StickyNotes',
        className: 'logo',
      },
    })

    new Button({
      targetEl: headerEl,
      initialState: {
        className: 'add-sticky-btn',
        content: 'Add Note',
      },
      onClick: () => {
        onOpen()
      },
    })
  }

  this.render()
  targetEl.append(headerEl)
}
