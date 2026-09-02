import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Footer } from "./Footer"

describe("Footer", () => {
  it("shows the copyright with the current year", () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(screen.getByText(`© ${year} Sabuj Ghosh`)).toBeInTheDocument()
  })

  it("links the tweet callout safely in a new tab", () => {
    render(<Footer />)

    const link = screen.getByRole("link", { name: "tweet" })
    expect(link).toHaveAttribute("href", "https://x.com/sabujghosh21")
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener noreferrer")
  })
})
