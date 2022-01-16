import Button from "../atomic/Button.js"

export default function Header({
    targetEl,
    onChange,
    onRemove,
}){
    const headerEl = document.createElement('div')
    headerEl.className = 'header'

    this.render = () =>{
        headerEl.innerHTML = `
            <div>
                <span class="logo">FlashCard</span>
            </div>
        `
    }

    this.render()

    new Button({
        targetEl : headerEl,
        initialState : 'Add Card',
        onClick: () =>{
            onChange()
        }
    })

    new Button({
        targetEl : headerEl,
        initialState : 'Del Card',
        onClick: () =>{
            onRemove()
        }
    })

    targetEl.append(headerEl)
}