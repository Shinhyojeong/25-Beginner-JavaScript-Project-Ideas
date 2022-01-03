import Container from './components/Container.js'
import Button from './components/Button.js'

export default function App ({ targetEl }){

    this.state = {
        startColor : 'red',
        endColor : 'yellow',
    }

    this.setState = nextState => {
        this.state = nextState
        container.setState(this.state)
    }

    const container = new Container({targetEl, initialState:{
        ...this.state
    }})

    new Button({
        targetEl,
        onClick: (colors) => {
            this.setState(colors)
        }
    })
}