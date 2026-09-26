import { describe, expect, it } from "vitest";
import { toNavLinks, toSectionId } from "./navigation";

describe("toSectionId", () => {
  it.each([
    ["About", "about"],
    ["My Projects", "my-projects"],
    ["  Contact  ", "contact"],
    ["Experiência & Educação", "experiencia-educacao"],
    ["--Weird__Label!!", "weird-label"],
    ["", ""],
  ])("maps %j to %j", (input, expected) => {
    expect(toSectionId(input)).toBe(expected);
  });
});

describe("toNavLinks", () => {
  it("builds anchor links preserving order and labels", () => {
    expect(toNavLinks(["About", "Side Projects"])).toEqual([
      { label: "About", href: "#about" },
      { label: "Side Projects", href: "#side-projects" },
    ]);
  });

  it("returns an empty list for no sections", () => {
    expect(toNavLinks([])).toEqual([]);
  });
});
