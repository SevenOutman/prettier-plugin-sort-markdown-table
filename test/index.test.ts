import { test, expect } from "vitest"
import prettier from "prettier"
import * as plugin from "../src"

test("Sort markdown table following prettier-sort-markdown-table annotation", () => {
  const markdown = `
<!-- prettier-sort-markdown-table -->
| name | email | description |
| -- | -- | --- |
| zhang | zhang@a.com  | zhang  |
|  wang | wang@a.com   | wang |
| li | li@a.com   | li  |
| amity | amity@a.com  | amity  |
| batman | batman@a.com | batman |
`

  const formatted = `<!-- prettier-sort-markdown-table -->

| name   | email        | description |
| ------ | ------------ | ----------- |
| amity  | amity@a.com  | amity       |
| batman | batman@a.com | batman      |
| li     | li@a.com     | li          |
| wang   | wang@a.com   | wang        |
| zhang  | zhang@a.com  | zhang       |
`

  expect(
    prettier.format(markdown, {
      parser: "markdown",
      plugins: [plugin],
    }),
  ).resolves.toBe(formatted)
})
