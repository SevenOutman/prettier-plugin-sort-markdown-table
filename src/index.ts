import type { Plugin } from "prettier"
import { parsers } from "prettier/parser-markdown"

const markdownParser = parsers["markdown"]

const plugin: Plugin = {
  parsers: {
    markdown: {
      ...markdownParser,
      preprocess(text, options) {
        if (markdownParser.preprocess) {
          text = markdownParser.preprocess(text, options)
        }

        // Sort the table directly following <!-- prettier-sort-markdown-table --> annotation (if any)
        text = text.replace(
          // Regex reference: https://stackoverflow.com/a/29616512
          /<!--\s*prettier-sort-markdown-table\s*-->\r?\n(?:\s*\r?\n)*(\|(?:([^\r\n|]*)\|)+\r?\n\|(?:(\s*:?-+:?\s*)\|)+\r?\n(\|(?:([^\r\n|]*)\|)+(?:\r?\n)?)+)/g,
          (match) => {
            const lines = match.split(/\r?\n/)

            const annotationLines = [lines.shift()]

            // Push empty lines between annotation and table
            while (!lines[0].startsWith("|")) {
              annotationLines.push(lines.shift())
            }

            const tableHeaderLines = [lines.shift(), lines.shift()]

            // Sort table body rows here
            const tableBodyLines = lines.filter(Boolean).sort()

            // The regex matched trailing newlines following the table
            const trailingNewlines = lines.slice(tableBodyLines.length)

            return [
              ...annotationLines,
              ...tableHeaderLines,
              ...tableBodyLines,
              ...trailingNewlines,
            ].join("\n")
          },
        )
        return text
      },
    },
  },
}

export default plugin
