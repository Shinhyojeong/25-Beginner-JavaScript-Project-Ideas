import Button from '../atomic/Button.js'
import Text from '../atomic/Text.js'

export default function Header({
    targetEl,
    initialState,
    // onClick,
}){
    const headerEl = document.createElement('div')
    headerEl.className = 'header'

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
    }

    const operators = [ 'add', 'subtract', 'multiply', 'divider' ]


    this.render = () => {
        new Text({
            targetEl : headerEl,
            initialState : {
                content : 'MATH 4 KIDS',
                className : 'logo',
                containerType : 'div'
            }
        })

        operators?.forEach((operator) => {
            new Button({
                targetEl : headerEl,
                initialState : {
                    content : operator,
                    className : `${operator}-btn`,
                    value : operator,
                },
                onClick : () => {
                    this.setState(operator)
                    console.log(this.state)
                }
            })
        })



    }

    this.render()
    targetEl.append(headerEl)
}
