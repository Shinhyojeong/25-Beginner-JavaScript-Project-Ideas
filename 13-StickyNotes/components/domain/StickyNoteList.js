import StickyNote from './StickyNote.js'
import { optimization } from '../../utils/optimization.js'

export default function StickyNoteList({
    targetEl,
    initialState,
    onRemove,
}){
    this.state = initialState

    const stickyNoteListEl = document.createElement('div')
    stickyNoteListEl.className = 'sticky-note-list'

    this.setState = nextState => {
        if(optimization(this.state, nextState)){ return }

        this.state = nextState
        this.render()
    }

    this.render = () => {
        stickyNoteListEl.innerHTML = ''

        this.state?.forEach((sticky) => {
            new StickyNote({
                targetEl : stickyNoteListEl,
                initialState : sticky,
            })
        })
    }

    targetEl.append(stickyNoteListEl)

    stickyNoteListEl.addEventListener('dblclick', e => {
        const stickyNote = e.target.closest('div')
        const { id } = stickyNote.dataset

        if(!id) { return }

        onRemove(id * 1)
    })
}