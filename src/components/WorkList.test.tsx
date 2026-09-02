import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import { finishDrawerCloseAnimation } from "@/test-utils/drawer"
import { WorkList } from "./WorkList"

const items = [
  {
    title: "AITV",
    description: "Learn AI in bite-sized shorts.",
    href: "https://aitv.pro",
    image: "/aitv.png",
  },
  {
    title: "be10x",
    description: "AI upskilling.",
    href: "https://be10x.in/",
    image: "/be10x.png",
  },
]

describe("WorkList", () => {
  it("renders one trigger per work item with its content", () => {
    render(<WorkList items={items} />)

    for (const item of items) {
      const trigger = screen.getByRole("button", {
        name: new RegExp(item.title),
      })
      expect(trigger).toHaveAttribute("type", "button")
      expect(
        screen.getByRole("heading", { name: item.title })
      ).toBeInTheDocument()
      expect(screen.getByText(item.description)).toBeInTheDocument()
      expect(screen.getByRole("img", { name: item.title })).toHaveAttribute(
        "src",
        item.image
      )
    }
  })

  it("opens the preview for the clicked item only", async () => {
    const user = userEvent.setup()
    render(<WorkList items={items} />)

    await user.click(screen.getByRole("button", { name: /AITV/ }))
    expect(
      screen.getByRole("heading", { name: "AITV preview" })
    ).toBeInTheDocument()
    expect(screen.getByTitle("AITV preview")).toHaveAttribute(
      "src",
      "https://aitv.pro"
    )
    expect(screen.queryByTitle("be10x preview")).not.toBeInTheDocument()

    await user.keyboard("{Escape}")
    finishDrawerCloseAnimation()
    await waitForElementToBeRemoved(() => screen.queryByTitle("AITV preview"))
    await user.click(screen.getByRole("button", { name: /be10x/ }))
    expect(
      screen.getByRole("heading", { name: "be10x preview" })
    ).toBeInTheDocument()
    expect(screen.getByTitle("be10x preview")).toHaveAttribute(
      "src",
      "https://be10x.in/"
    )
  })
})
