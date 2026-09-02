import { describe, expect, it } from "vitest"
import { cn } from "./utils"

describe("cn", () => {
  it("joins class names and drops falsy values", () => {
    expect(cn("a", false, null, undefined, 0, "b")).toBe("a b")
  })

  it("resolves conflicting tailwind classes to the last one", () => {
    expect(cn("px-2", "px-4")).toBe("px-4")
    expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500")
  })

  it("keeps non-conflicting classes", () => {
    const result = cn(
      "flex items-center gap-2",
      "text-sm text-muted-foreground"
    )
    expect(result).toContain("flex")
    expect(result).toContain("gap-2")
    expect(result).toContain("text-muted-foreground")
  })
})
