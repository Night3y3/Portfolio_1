import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Navigation } from "./Navigation"

const EXTERNAL_LINKS = [
  { name: "X", href: "https://x.com/sabujghosh21" },
  { name: "GitHub", href: "https://github.com/Night3y3" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sabujghosh/" },
]

describe("Navigation", () => {
  it("links the brand to the homepage", () => {
    render(<Navigation />)

    const brand = screen.getByRole("link", { name: "sabuj." })
    expect(brand).toHaveAttribute("href", "/")
  })

  it("opens the email link in the same tab", () => {
    render(<Navigation />)

    const email = screen.getByRole("link", { name: "Email" })
    expect(email).toHaveAttribute("href", "mailto:sabrexghosh@gmail.com")
    expect(email).not.toHaveAttribute("target")
  })

  it.each(EXTERNAL_LINKS)(
    "opens the $name link in a new tab without tab-nabbing risk",
    ({ name, href }) => {
      render(<Navigation />)

      const link = screen.getByRole("link", { name })
      expect(link).toHaveAttribute("href", href)
      expect(link).toHaveAttribute("target", "_blank")
      expect(link).toHaveAttribute("rel", "noopener noreferrer")
    }
  )
})
