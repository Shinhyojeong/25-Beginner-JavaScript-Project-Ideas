import {request} from '../api/api.js'

export default function Button ({ targetEl, onClick }){
    const btnEl = document.createElement('button')
    btnEl.className = 'create-quote_btn'
    btnEl.textContent = 'Click Me!'
    targetEl.appendChild(btnEl)

    // const getRandomQuote = async() =>{

    //     return qoute
    // }

    btnEl.addEventListener('click', async() => {
        const qoute =  await request()
        onClick(qoute)
    })
}