export default function HandleTimer({
    onSubmit,
    initialState
}){
    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    const updateTimer = () => {
        this.setState({
            ...this.state,
            time : this.state.time + 1
        })

        onSubmit(this.state.time)
        timer = setTimeout(updateTimer, 100)
    }

    let timer = null

    this.render = () => {
        const { startTimer } = this.state

        if(!startTimer){
            clearTimeout(timer)
            timer = null
            return
        }
        if(timer){ return }

        timer = setTimeout(updateTimer, 100)
    }
}