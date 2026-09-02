import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import { finishDrawerCloseAnimation } from "@/test-utils/drawer"
import { SitePreviewDrawer } from "./SitePreviewDrawer"

const site = {
  title: "AITV",
  href: "https://aitv.pro",
  image: "/logos/aitv-logo.png",
}

function setup() {
  const user = userEvent.setup()
  render(
    <SitePreviewDrawer site={site}>
      <span>Preview AITV</span>
    </SitePreviewDrawer>
  )
  return user
}

describe("SitePreviewDrawer", () => {
  it("renders a trigger button and keeps the preview hidden until opened", () => {
    setup()

    const trigger = screen.getByRole("button", { name: "Preview AITV" })
    expect(trigger).toHaveAttribute("type", "button")
    expect(
      screen.queryByRole("heading", { name: "AITV preview" })
    ).not.toBeInTheDocument()
    expect(screen.queryByTitle("AITV preview")).not.toBeInTheDocument()
  })

  it("opens the preview with site info and a sandboxed, no-referrer iframe", async () => {
    const user = setup()
    await user.click(screen.getByRole("button", { name: "Preview AITV" }))

    expect(
      screen.getByRole("heading", { name: "AITV preview" })
    ).toBeInTheDocument()
    expect(screen.getByText("AITV")).toBeInTheDocument()
    expect(screen.getByText("aitv.pro")).toBeInTheDocument()

    const frame = screen.getByTitle("AITV preview")
    expect(frame.tagName).toBe("IFRAME")
    expect(frame).toHaveAttribute("src", "https://aitv.pro")
    expect(frame).toHaveAttribute("loading", "lazy")
    expect(frame).toHaveAttribute("referrerpolicy", "no-referrer")
    expect(frame).toHaveAttribute(
      "sandbox",
      "allow-scripts allow-same-origin allow-forms allow-popups"
    )

    const externalLink = screen.getByRole("link", { name: "Open in new tab" })
    expect(externalLink).toHaveAttribute("href", "https://aitv.pro")
    expect(externalLink).toHaveAttribute("target", "_blank")
    expect(externalLink).toHaveAttribute("rel", "noopener noreferrer")
  })

  it("offers a fallback link to open the site when embedding fails", async () => {
    const user = setup()
    await user.click(screen.getByRole("button", { name: "Preview AITV" }))

    const fallback = screen.getByRole("link", { name: "open in new tab" })
    expect(fallback).toHaveAttribute("href", "https://aitv.pro")
    expect(fallback).toHaveAttribute("target", "_blank")
    expect(fallback).toHaveAttribute("rel", "noopener noreferrer")
  })

  it("closes the preview from the close button", async () => {
    const user = setup()
    await user.click(screen.getByRole("button", { name: "Preview AITV" }))
    await user.click(screen.getByRole("button", { name: "Close" }))

    finishDrawerCloseAnimation()
    await waitForElementToBeRemoved(() =>
      screen.queryByRole("heading", { name: "AITV preview" })
    )
  })

  it("closes the preview with the Escape key", async () => {
    const user = setup()
    await user.click(screen.getByRole("button", { name: "Preview AITV" }))
    await user.keyboard("{Escape}")

    finishDrawerCloseAnimation()
    await waitForElementToBeRemoved(() => screen.queryByTitle("AITV preview"))
  })
})
