import { Button } from '@base'

export default function Header({ targetEl, onChange, onRemove }) {
  const headerEl = document.createElement('div')
  const btnContainerEl = document.createElement('div')

  headerEl.className = 'header'
  btnContainerEl.className = 'btn-container'

  this.render = () => {
    headerEl.innerHTML = `
            <div>
                <span class="logo">FlashCard</span>
            </div>
        `
  }

  this.render()

  new Button({
    targetEl: btnContainerEl,
    initialState: 'Add Card',
    onClick: () => {
      onChange()
    },
  })

  new Button({
    targetEl: btnContainerEl,
    initialState: 'Del Card',
    onClick: () => {
      onRemove()
    },
  })

  headerEl.append(btnContainerEl)
  targetEl.append(headerEl)
}
