import { describe, expect, it } from "vitest";
import { buildMetadata } from "./metadata";

const meta = {
  title: "Title",
  description: "Description",
  url: "https://example.com",
  locale: "en_US",
};

describe("buildMetadata", () => {
  it("maps site meta onto Next metadata fields", () => {
    const result = buildMetadata(meta);
    expect(result.title).toBe("Title");
    expect(result.description).toBe("Description");
    expect(String(result.metadataBase)).toBe("https://example.com/");
    expect(result.openGraph).toMatchObject({
      url: "https://example.com",
      title: "Title",
      description: "Description",
      locale: "en_US",
    });
    expect(result.twitter).toMatchObject({ title: "Title", description: "Description" });
  });

  it("is deterministic", () => {
    expect(buildMetadata(meta)).toEqual(buildMetadata(meta));
  });

  it("throws on an invalid url", () => {
    expect(() => buildMetadata({ ...meta, url: "not a url" })).toThrow();
  });
});
