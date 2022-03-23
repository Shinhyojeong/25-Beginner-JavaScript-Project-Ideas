import { initRouter } from '@utils/routeEvent'
import { appendPage } from '@utils/handlePage'
import '@style/index.css'

export default function App({ targetEl }) {
  this.route = () => {
    appendPage(targetEl)
  }

  this.route()
  initRouter(() => this.route())

  window.addEventListener('popstate', () => {
    this.route()
  })
}
