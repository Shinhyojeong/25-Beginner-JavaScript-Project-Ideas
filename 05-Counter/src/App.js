import ReadNumber from "./components/ReadNumber.js"
import CountingBtns from './components/CountingBtns.js'

export default function App({
    targetEl
}){
    this.state = {
        counter : 0,
    }

    this.setState = nextState => {
        console.log(nextState)
        this.state = nextState
        readNumber.setState(nextState)
    }

    const readNumber = new ReadNumber({
        targetEl,
        initialState : this.state.counter
    })

    new CountingBtns({
        targetEl,
        onCount : (btnType) => {
            const { counter } = this.state

            if(btnType === 'increase'){
                this.setState({
                    counter : counter + 1
                })
            }else if(btnType === 'decrease'){
                this.setState({
                    counter: counter - 1
                })
            }
        }
    })


}