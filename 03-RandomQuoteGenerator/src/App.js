import Button from "./components/Button.js";
import Container from "./components/Container.js";


export default function App ({targetEl}){
    this.state = {
        quote : null,
    }

    this.setState = nextState => {
        this.state = nextState
        container.setState(nextState)
    }

    const container = new Container({
        targetEl,
        initialState : this.state,
    })

    new Button({
        targetEl,
        onClick : quote => {
            this.setState({
                quote
            })
        }
    })
}