import {request} from '../api/api.js'

export default function Button ({ targetEl, onClick }){
    const btnEl = document.createElement('button')
    btnEl.className = 'generate-quote_btn'
    btnEl.textContent = 'Generate Quote'
    targetEl.appendChild(btnEl)

    btnEl.addEventListener('click', async() => {
        const qoute =  await request()
        onClick(qoute)
    })
}