// import AnswerCard from "./AnswerCard.js"
import Button from '../atomic/Button.js'

export default function AnswerCardList({
    targetEl,
    initialState,
    handleCheckAnswer,
}){
    const answerCardListEl = document.createElement('div')
    answerCardListEl.className = 'answer-card-list'

    this.state = initialState

    this.setState = nextState => {
        this.state = nextState
        this.render()
    }

    this.render = () => {
        answerCardListEl.innerHTML = ``

        this.state?.forEach((card) => {
            new Button({
                targetEl : answerCardListEl,
                initialState : {
                    value : card,
                    content : card,
                    className : 'answer-card',
                },
                onClick : (target) => {
                    handleCheckAnswer(target.value)
                }
            })
        })
    }

    this.render()
    targetEl.append(answerCardListEl)
}