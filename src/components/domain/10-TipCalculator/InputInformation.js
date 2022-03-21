import { Button } from '@base'

export default function InputInformation({ targetEl, initialState, onSubmit }) {
  const inputContainerEl = document.createElement('div')
  inputContainerEl.className = 'container-input'

  this.state = initialState

  this.setState = (nextState) => {
    this.state = nextState
  }

  this.render = () => {
    inputContainerEl.innerHTML = `
            <hr>
            <form>
                <div class="form-item">
                    <label for ="bill">
                        <span class="input-title">Bill Amount</span>
                    </label>
                    <input type="number" class="input-info bill" id="bill" />
                </div>
                <div class="form-item">
                    <label for ="guest">
                        <span class="input-title">Number of Guests</span>
                    </label>
                    <input type="number" class="input-info guest" id="guest" />
                </div>
                <div class="form-item">
                    <label for="service" class="input-box">
                        <span class="input-title">Service Quality</span>
                        <select id="service" class="input-info service">
                            <option value="default">Choose...</option>
                            <option value="0.3">30% - Outstanding</option>
                            <option value="0.2">20% - Good</option>
                            <option value="0.15">15% - It was ok</option>
                            <option value="0.1">10% - Bad</option>
                            <option value="0.05">5% - Terrible</option>
                        </select>
                    </label>
                </div>
            </form>
            <hr>
        `
  }

  this.render()
  targetEl.append(inputContainerEl)

  new Button({
    targetEl,
    initialState: 'Calculate',
    onClick: () => {
      const formData = document.forms[0]
      const bill = formData.elements[0]
      const guest = formData.elements[1]
      const service = formData.elements[2]

      if (service.value === 'default') {
        return
      }
      const tip = (bill.value / guest.value) * service.value
      onSubmit(tip)

      bill.value = ''
      guest.value = ''
      service.value = 'default'
    },
  })
}
