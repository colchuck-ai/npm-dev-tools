# npm-dev-tools

This project publishes an npm package called `@engineering/npm-dev-tools` containing shared configuration for development.

## Installation

Install the package along with its peer dependencies:

```bash
npm install --save-dev @engineering/npm-dev-tools \
  @commitlint/cli \
  @commitlint/config-conventional \
  @semantic-release/exec \
  @semantic-release/gitlab \
  conventional-changelog-conventionalcommits \
  husky \
  remark \
  remark-cli \
  remark-lint \
  remark-lint-no-dead-urls \
  remark-validate-links \
  semantic-release
```

See [Gitlab documentation on installing a npm package](https://docs.gitlab.com/user/packages/npm_registry/#install-a-package) for registry configuration.

## Usage

### `.commitlintrc.js`

```js
module.exports = require("@engineering/npm-dev-tools/config/commitlint/commitlint");
```

### `.remarkrc.js`

```js
module.exports = require("@engineering/npm-dev-tools/config/remark/remark");
```

### `.releaserc.js`

```js
module.exports = {
  extends: [
    "@engineering/npm-dev-tools/config/semantic-release/tag-format",
    "@engineering/npm-dev-tools/config/semantic-release/branches",
    "@engineering/npm-dev-tools/config/semantic-release/gitlab-plugins",
  ],
};
```
