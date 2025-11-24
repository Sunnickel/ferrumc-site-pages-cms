# Contributing

When contributing to this repository, you'll have more luck with getting PRs approved if you come chat with us in the
Discord server and letting us know about what you are fixing/adding.

## Pull Request Process

1. Make sure all tests and lints pass. PRs that don't pass CI will be rejected if your code is the cause of the failing
   tests/lints.
2. Make sure all needed files are also included and not using absolute paths.
3. Include a sufficient explanation of your PR. What is it adding/fixing, why does this feature need to be added/fixed,
   who have you discussed this with, etc. If these questions were answered in a conversation on this Discord, mention
   who you talked with and what consensus was reached. Unexplained PRs will rarely be accepted.
4. Check again that tests pass.
5. Check a 3rd time.
6. Check that EsLint passes with no issues. `npx eslint .` is used on CI.
7. Check that Prettier passes with no issues. `npx prettier --check .` is used on CI.
8. Check that TSC passes with no issues. `npx tsc` is used on CI.
9. Submit PR.

## Project specific guidelines

Just some rules to try to keep the repo nice and organised.

### Branches

#### `main`

This branch is the main branch. This is where all PRs should be made to. This branch is the most up to
date and should only be merged into with completed features.

#### `feature/feature-name`

This branch is for developing a feature. Once the feature is complete, a PR should be
made to the main branch. This branch should be branched off of the main branch.

#### `fix/fixed-thing`

This branch is for fixing a bug. Once the bug is fixed, a PR should be made to the main
branch. This branch should be branched off the main branch.

#### `rework/refactored-thing`

This branch is for refactoring code. Once the code is refactored, a PR should be made to the main branch.

### Project Layout

```text
+---.github                 | GitHub specific files
+---public                  | Assets for the website
+---src                     | Source code
|   +---style.css           | The CSS file for the website
|   +---app                 | The main binary that stitches everything together
|   |   +---page.tsx        | Main Page
|   |   +---legal           | Holds all legal pages
|   |   +---download        | Holds the site for downloads
|   |   +---dev             | Holds sites that could be interesting for developers or interested people
|   |   +---blog            | Holds the blog main site + blog posts
|   +---components          | The libraries that provide the business logic
|   |   +---header.tsx      | Header Component
|   |   +---footer.tsx      | Footer Component
|   |   +---background      | Components related to backgrounds
|   |   +---text            | Components related to text
|   |   +---layout          | Components related to layout
```

If you add a new directory, please add it to the above list along with its purpose.

### Code rules

1. No absolute paths. This will break the CI and make it harder to run the code on different machines.
2. Try to avoid just chaining `../` to get to the root of the project. This makes it harder to move files around and
   work out where a referenced file is. Use `@/*`
3. Don't be lazy and ignore possible null values or errors. Catch them and return proper messages.
4. If you add a new dependency, make sure it is added to `package.json`. Don't blindly add dependencies without
   checking if they are needed and could easily be made easier.
5. Before commiting run `eslint` and `prettier`.
6. Don't just ignore eslint errors in-code.
7. Don't use `any` in your code. Type the code properly, if needed create the types.
8. Don't include IDE-specific files or folders in the repository.

## Notes on formatting

Some IDEs have an automatic formatter that will format the code when you save. It is recommended to use this feature to
keep the code formatted correctly.

Automatic formatting is highly recommended as it will ensure that the code you write is mostly correctly formatted as
you go.
You should still run the eslint, prettier and tsc commands before submitting a PR to make sure
that the code is correctly formatted and passes the lints,
but automatic formatting will help to catch most of these issues as you go.

## Code of Conduct

Please note we have a code of conduct, please follow it in all your interactions with the project.

## License

By contributing, you agree that your contributions will be licensed under the project's license.

### [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
