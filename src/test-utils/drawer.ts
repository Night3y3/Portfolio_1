// jsdom has no CSS engine, so Radix Presence never receives `animationend`
// and keeps an exit-animating drawer mounted forever. Fires the event a
// browser would fire once vaul's exit animation actually completes.
export function finishDrawerCloseAnimation() {
  for (const node of document.querySelectorAll("[data-vaul-drawer]")) {
    if (node.getAttribute("data-state") !== "closed") continue
    const animationName = getComputedStyle(node).animationName
    if (!animationName || animationName === "none") continue
    const event = new Event("animationend")
    Object.defineProperty(event, "animationName", { value: animationName })
    node.dispatchEvent(event)
  }
}
