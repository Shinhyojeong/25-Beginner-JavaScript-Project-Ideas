const ROUTER_EVENT_NAME = 'change-route'

export const pushUrl = (nextUrl) => {
  window.dispatchEvent(
    new CustomEvent(ROUTER_EVENT_NAME, {
      detail: {
        nextUrl,
      },
    })
  )
}

export const initRouter = (onRoute) => {
  window.addEventListener(ROUTER_EVENT_NAME, (e) => {
    const { nextUrl } = e.detail

    if (nextUrl) {
      history.pushState(null, null, nextUrl)
      onRoute && onRoute()
    }
  })
}
