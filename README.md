# prettier-plugin-sort-markdown-table

[![npm version](https://badgen.net/npm/v/prettier-plugin-sort-markdown-table)](https://npm.im/prettier-plugin-sort-markdown-table) [![npm downloads](https://badgen.net/npm/dm/prettier-plugin-sort-markdown-table)](https://npm.im/prettier-plugin-sort-markdown-table)
[![codecov](https://codecov.io/gh/SevenOutman/prettier-plugin-sort-markdown-table/branch/main/graph/badge.svg?token=uIMN9ySxM2)](https://codecov.io/gh/SevenOutman/prettier-plugin-sort-markdown-table)

Prettier plugin that sorts markdown tables according to their first column.

## Install

```bash
npm i -D prettier-plugin-sort-markdown-table
```

Prettier [should automatically load this plugin](https://prettier.io/docs/en/plugins.html#using-plugins) once it's installed, you don't have to do manual configuration.

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
