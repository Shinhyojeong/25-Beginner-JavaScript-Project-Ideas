import AddList from "./components/AddList.js"
import ReadList from "./components/ReadList.js"
import RemoveList from "./components/RemoveList.js"

export default function App ({
    targetEl
}){
    this.state = {
        groceryList : []
    }

    this.setState = nextState => {
        this.state = nextState
        readList.setState(nextState)
    }

    new AddList({
        targetEl,
        onSubmit: (value) => {
            this.setState({
                groceryList : [ value, ...this.state.groceryList]
            })
        }
    })

    new RemoveList({
        targetEl,
        onClick: () => {
            this.setState({
                groceryList : []
            })
        }
    })

    const readList = new ReadList({
        targetEl,
        initialState : this.state.groceryList
    })
}