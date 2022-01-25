export default function Text({ targetEl, initialState }) {
  this.state = initialState

  const textContainerEl = document.createElement(this.state.containerType)
  textContainerEl.className = this.state.className

  this.render = () => {
    const { content } = this.state

    textContainerEl.innerHTML = `
            ${content}
        `
  }

  this.render()
  targetEl.append(textContainerEl)
}
