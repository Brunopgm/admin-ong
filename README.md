# ong

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Conventional Commits

In general the pattern mostly looks like this:

sh
type(scope?): description  #scope is optional


Real world examples can look like this:


chore: run tests on travis ci



fix(server): send cors headers



feat(github-actions): add actions for testing


#### Type

Must be one of the following:

- *build*: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- *chore*: Updating grunt tasks etc; no production code changes
- *ci*: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- *docs*: Documentation only changes
- *feat*: A new feature
- *fix*: A bug fix
- *improvement*: A code change that improves anything
- *perf*: A code change that improves performance
- *refactor*: A code change that neither fixes a bug nor adds a feature
- *revert*: The commit reverts a previous commit, begin with `revert: This reverts commit <hash>`
- *style*: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- *test*: Adding missing tests or correcting existing tests

#### Scope

Example scope values:

- init
- upgrade
- animation
- config
- changelog
- etc...

#### Description

The description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end