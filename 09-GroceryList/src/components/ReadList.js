export default function ReadList ({
    targetEl,
    initialState
}){
    const listContainer = document.createElement('div')

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        const { groceryList } = this.state

        listContainer.innerHTML = `
            <ul class="grocery-list">
                ${groceryList ? groceryList.map((item) => `<li class="grocery-item">${item}</li>`).join('') : ''}
            </ul>
        `
    }

    this.render()
    targetEl.append(listContainer)
}