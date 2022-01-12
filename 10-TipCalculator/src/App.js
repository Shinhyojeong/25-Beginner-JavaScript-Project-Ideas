import InputInformation from "./components/InputInformation.js"
import Button from './components/Button.js'

export default function App({
    targetEl
}){
    const containerEl = document.createElement('div')
    containerEl.className = 'container'
    containerEl.innerHTML = '<span class="container-title">Tip Calculator</span>'
    targetEl.append(containerEl)

    new InputInformation({
        targetEl
    })

    new Button({
        targetEl,
        onClick: () => {

        }
    })
}