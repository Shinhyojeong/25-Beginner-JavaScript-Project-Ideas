export default function LoadImage({
    targetEl,
    initialState,
}){
    const loadImage = document.createElement('div')
    loadImage.className = 'image-container'

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        const { slideNumber } = this.state
        loadImage.innerHTML = `
            <img src='/src/assets/img/Lam${slideNumber}.jpg' alt ='img-Lam${slideNumber}' class='img-lam'/>
        `
    }

    this.render()
    targetEl.append(loadImage)

}