# prettier-plugin-sort-markdown-table

[![npm version](https://badgen.net/npm/v/prettier-plugin-sort-markdown-table)](https://npm.im/prettier-plugin-sort-markdown-table) [![npm downloads](https://badgen.net/npm/dm/prettier-plugin-sort-markdown-table)](https://npm.im/prettier-plugin-sort-markdown-table)
[![codecov](https://codecov.io/gh/SevenOutman/prettier-plugin-sort-markdown-table/branch/main/graph/badge.svg?token=uIMN9ySxM2)](https://codecov.io/gh/SevenOutman/prettier-plugin-sort-markdown-table)

Prettier plugin that sorts markdown tables according to their first column.

> This version of the plugin only works with Prettier 3.
> For Prettier 2, please use [1.x](https://github.com/SevenOutman/prettier-plugin-sort-markdown-table/tree/1.x).

## Install

```bash
npm i -D prettier-plugin-sort-markdown-table
```

Add the plugin to your Prettier configuration file:

```json
{
  "plugins": ["prettier-plugin-sort-markdown-table"]
}
```

## Usage

Annotate tables you want to sort with `<!-- prettier-sort-markdown-table -->` comment.

For example:

<!-- prettier-ignore-start -->
```markdown
<!-- prettier-sort-markdown-table -->
| name | email | description |
| -- | -- | --- |
| zhang | zhang@a.com  | zhang  |
| wang | wang@a.com   | wang |
| li | li@a.com   | li  |
| amity | amity@a.com  | amity  |
| batman | batman@a.com | batman |
```
<!-- prettier-ignore-end -->

Becomes:

```markdown
<!-- prettier-sort-markdown-table -->

| name   | email        | description |
| ------ | ------------ | ----------- |
| amity  | amity@a.com  | amity       |
| batman | batman@a.com | batman      |
| li     | li@a.com     | li          |
| wang   | wang@a.com   | wang        |
| zhang  | zhang@a.com  | zhang       |
```

## License

MIT &copy; [Doma](https://doma.land)
