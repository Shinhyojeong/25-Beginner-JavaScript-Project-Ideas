import CalculatorBtns from "./components/CalculatorBtns.js";
import ReadCalculation from './components/ReadCalculation.js'

export default function App ({
    targetEl
}){
    this.state = {
        calculation : 0
    }

    this.setState = nextState => {
        this.state = nextState
        readCalculation.setState(nextState)
    }

    const readCalculation = new ReadCalculation({
        targetEl,
        initialState : this.state.calculation
    })

    const calculatorBtns = new CalculatorBtns({
        targetEl,
        onClick : (calculation, name) => {
            console.log(calculation)

            let nextCalculation = 0
            try{
                if(name === 'equal'){
                    nextCalculation = eval(calculation.slice(0, -1))
                    calculatorBtns.setState({
                        calculation : 0,
                        prevSelectedElName : 0,
                    })
                }else{
                    nextCalculation = calculation
                }
            }catch(e){
                alert('식이 잘못됐습니다! 다시 입력해 주세요')
                calculatorBtns.setState({
                    calculation : 0,
                    prevSelectedElName : 0,
                })
            }

            this.setState({
                calculation: nextCalculation
            })
        }
    })
}