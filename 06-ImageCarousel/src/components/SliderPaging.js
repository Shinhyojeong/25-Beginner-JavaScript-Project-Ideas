export default function SlidePaging ({
    targetEl,
    initialState,
}){
    const slidePaging = document.createElement('div')
    slidePaging.className = 'paging-container'

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    const range = (start, end) => Array.from({length: (end - start + 1)}, (v, k) => k + start)
    const slideArray = range(this.state.startSlideNumber, this.state.endSlideNumber)

    this.render = () => {
        slidePaging.innerHTML = `
            ${slideArray.map(num => (
                `<div class=paging-block ${num === this.state.slideNumber && 'selected'}></div>`
            )).join('')}
        `
    }

    this.render()
    targetEl.append(slidePaging)

}