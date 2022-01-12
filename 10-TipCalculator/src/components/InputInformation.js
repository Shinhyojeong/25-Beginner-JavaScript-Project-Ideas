export default function InputInformation({
    targetEl
}){
    const inputContainerEl = document.createElement('div')
    inputContainerEl.className = 'container-input'

    this.render = () => {
        inputContainerEl.innerHTML = `
            <hr>
            <label for="input-bill" class="input-box">
                <span class="input-title">Bill Amount</span>
                <input type="number" class="input-info"/>
            </label>
            <label for="input-guests" class="input-box">
                <span class="input-title">Number of Guests</span>
                <input type="number" class="input-info"/>
            </label>
            <label for="input-service" class="input-box">
                <span class="input-title">Service Quality</span>
                <select id="input-service" class="input-info">
                    <option value="">Choose...</option>
                    <option value="outstanding">30% - Outstanding</option>
                    <option value="good">20% - Good</option>
                    <option value="ok">15% - It was ok</option>
                    <option value="bad">10% - Bad</option>
                    <option value="terrible">5% - Terrible</option>
                </select>
            </label>
            <hr>
        `
    }

    this.render()
    targetEl.append(inputContainerEl)
}