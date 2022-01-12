import { confirmDay, addZero, confirmAmPm, readHours } from '../utils/processDayInformation.js'

export default function Clock({
    targetEl
}){
    const containerEl = document.createElement('div')
    containerEl.className = 'container'

    this.render = () => {
        const today = new Date()

        containerEl.innerHTML = `
            <span class="clock day">${confirmDay(today.getDay())}</span>
            <span class="clock hours">${readHours(today.getHours())} :</span>
            <span class="clock min">${addZero(today.getMinutes())}</span>
            <span class="clock ampm">${confirmAmPm(today.getHours())}</span>
        `
        setTimeout(() => {this.render()}, 500)
    }

    this.render()
    targetEl.append(containerEl)
}