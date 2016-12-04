## Welcome!

I'm so glad you've found this project interesting and useful enough that you'd
like to contribute to its development.

Please take time to review the policies and procedures in this document prior
to making and submitting any changes.

This guide was drafted with tips from [Wrangling Web Contributions: How to
Build a CONTRIBUTING.md](https://mozillascience.github.io/working-open-workshop/contributing/)
and with some inspiration from [the Atom project's CONTRIBUTING.md
file](https://github.com/atom/atom/blob/master/CONTRIBUTING.md).

## Table of contents

- [Quick links](#quick-links)
- [Code of conduct](#code-of-conduct)
- [Reporting issues](#reporting-issues)
- [Updating documentation](#updating-documentation)
- [Development environment setup](#development-environment-setup)
- [Workflow](#workflow)
- [Testing](#testing)
- [Coding conventions](#coding-conventions)
- [Open Source License](#open-source-license)

## Quick links

- [README](README.md)
- [Code of conduct](CODE_OF_CONDUCT.md)
- [License information](LICENSE.md)
- [Original repository](https://github.com/mbland/slack-github-issues/)
- [Issues](https://github.com/mbland/slack-github-issues/issues)
- [Pull requests](https://github.com/mbland/slack-github-issues/pulls)

## Code of conduct

Harrassment or rudeness of any kind will not be tolerated, period. For
specifics, see the [CODE_OF_CONDUCT](CODE_OF_CONDUCT.md) file.

## Reporting issues

Before reporting an issue, please use the search feature on the [issues
page](https://github.com/mbland/slack-github-issues/issues) to see if an issue
matching the one you've observed has already been filed.

If you do find one...

### Do not add a +1 comment!

If you find an issue that interests you, but you have nothing material to
contribute to the thread, use the *Subscribe* button on the right side of the
page to receive notifications of further conversations or a resolution. Comments
consisting only of "+1" or the like tend to clutter the thread and make it more
painful to follow the discussion.

If you _do_ have something to add to the conversation, or _don't_ find a
matching issue...

### Update an existing issue or file a new one

Try to be as specific as possible about your environment and the problem you're
observing. At a minimum, include:

- The version of the slack-github-issues package you're using
- Command line steps, code snippets, or automated tests that reproduce the issue

## Updating documentation

If you've a passion for writing clear, accessible documentation, please don't be
shy about sending pull requests! The documentation is just as important as the
code.

Also: _no typo is too small to fix!_ Really. Of course, batches of fixes are
preferred, but even one nit is one nit too many.

## Development environment setup

Install Node.js per [step 1 of the "Installation and usage" instructions from
the README](./README.md#installation-and-usage). You don't need to create an app
instance, a Slack bot user, a GitHub user, a configuration file, or environment
variables until you intend to deploy your app.

You will need [Git](https://git-scm.com/downloads) installed on your system. If
you are not familiar with Git, you may wish to reference the [Git
documentation](https://git-scm.com/doc).

Once Node.js and Git are installed, clone this repository and ensure your
development environment is in a good state:

```sh
$ git clone git@github.com:mbland/slack-github-issues.git
$ cd slack-github-issues
$ ./go
```

For information on the `./go` script and its commands, run `./go help`.

After making changes, run `./go lint` and `./go test` frequently. Add new tests
in [the `tests` directory](./tests/) for any new functionality, or to reproduce
any bugs you intend to fix.

You may wish to make an alias for the `./go` script for convenience. For
example:

```sh
$ eval "$(./go env sgi)"
```

will create a shell function called `sgi` that will make the `./go` commands
from the project available from any directory, and that will provide
tab-completion for the script and any of its commands that implement completion.
Run `./go help env` and `./go env` for details.

## Workflow

The basic workflow for submitting changes resembles that of the [GitHub Git
Flow](https://guides.github.com/introduction/flow/), except that you will be
working with your own fork of the repository and issuing pull requests to the
original.

If you know you will be submitting changes upstream,  and [fork the
repository]().

1. [Create a GitHub account](https://github.com/join) if you've not done so
   already
1. Create your own fork of the repository by clicking the "Fork" button on
   https://github.com/mbland/slack-github-issues
1. Clone your forked repo to your local machine, or add it as a remote to your
   existing clone of the original (renaming the original `origin` to `upstream`
   first; replace `<USERNAME>` with your own GitHub username):
   ```sh
   $ git remote rename origin upstream
   $ git remote add origin git@github.com:<USERNAME>/slack-github-issues.git
   $ git fetch origin
   $ git checkout master
   $ git reset --hard origin/master
   ```
1. Create your feature branch (`git checkout -b my-new-feature`)
1. Develop _and [test](#testing)_ your changes as necessary.
1. Commit your changes (`git commit -am 'Add some feature'`)
1. Push to the branch (`git push origin my-new-feature`)
1. Create a new [GitHub pull
   request](https://help.github.com/articles/using-pull-requests/) for your
   feature branch based against the original repository's `upstream/master`
   branch
1. If your request is accepted, you can [delete your feature
   branch](https://help.github.com/articles/deleting-unused-branches/) and
   pull the updated `upstream/master` branch from the original repository into
   your fork. You may even [delete your
   fork](https://help.github.com/articles/deleting-a-repository/) if you don't
   anticipate making further changes.

## Testing

- Continuous integration status: [![Continuous integration status](https://travis-ci.org/mbland/slack-github-issues.png?branch=master)](https://travis-ci.org/mbland/slack-github-issues)
- Coverage status: [![Coverage Status](https://coveralls.io/repos/github/mbland/slack-github-issues/badge.svg?branch=master)](https://coveralls.io/github/mbland/slack-github-issues?branch=master)

No bug fixes or new features will be accepted without accompanying tests.
Period.

Any changes that break the continuous integration build must be fixed or rolled
back immediately.

This project uses the [Mocha test framework](https://mochajs.org/), the [Chai
assertion library](http://chaijs.com/), and the [Chai-as-promised assertions for
Promises library](https://www.npmjs.com/package/chai-as-promised) to write and
run tests. All tests are in the `tests/` directory and are run using the `./go
test` command.

The `./go test` command has a very flexible syntax for running a subset of test
suites and passing command line options to Mocha. Enabling tab completion via
`./go env` is highly encouraged. See `./go help test` for more information.

Before sending your code for review, make sure to run the entire test suite via
`./go test --coverage` to make sure everything passes and your changes are
adequately covered by new and existing tests.

## Coding conventions

- [Formatting](#formatting)
- [Naming](#naming)
- [Variable and parameter declarations](#variable-and-parameter-declarations)
- [Command substitution](#command-substitution)
- [Conditions and loops](#conditionals-and-loops)
- [Output](#output)
- [Gotchas](#gotchas)

### Formatting

- Most of the rules are automated via the [.eslintrc](.eslintrc) file. See the
  [ESLint](http://eslint.org/) web site for the User guide and Rules
  definitions.
- Notice the maximum line length is 80 characters. (Yes, the maintainer is a
  dinosaur who likes viewing files side-by-side in a 161-column terminal
  window.)

The following are intended to prevent too-compact code:

- Declare only one variable per `var` line
- Do not use one-line `if`, `for`, or `while` statements.
  - Note the exception for the [ternary operator](#conditionals-and-loops).
- Do not write functions entirely on one line.
- For `case` statements: put each pattern on a line by itself; put each command
  on a line by itself; put the `break;` terminator on a line by itself.

_Confession:_ I have used one-liners like crazy in the past. Looking back at my
own code, I've found them difficult to understand. Spreading out declarations,
statements, and functions makes the code easier to follow, as the behavior is
more explicit. It also makes it more `grep`-pable, as "one thing per line" makes
it easier to find, count, and possibly transform things.

### Naming

- Constants and globals should be in `ALL_CAPS`. Most should be defined in
  `lib/constants.js`.

### ES6+ features

- Use only Promises, which have been supported since Node.js v0.12. Since this
  is library code, we want to support the earliest Node version possible. You
  can see the latest Node compatibility info at
  [node.green](http://node.green/).

### Function declarations

- Don't use arrow functions. (See [ES6+ features][#es6+-features].)
- Don't use `Function.bind()`, as its performance tends to be sub-par. Define
  explicit closures around a `var impl = this;` declaration (where `impl` may be
  different depending on the context) instead.
- Try to keep function expression implementations very short, optimally one
  line. In other words, most function expressions should delegate to another
  function immediately.
  - This is for two reasons. One, it's typically easier to follow the logic when
    a dynamically-generated function delegates to a more permanent one. Second,
    it may enable Node.js/V8 to better optimize the permanent function. (Of
    course, I haven't measured this _yet_...)
- Functions containing a `try/catch` block should also remain very small, and
  delegate to other functions as appropriate.
  - This is again to aid readability, and also performance, as it is known that
    Node.js/V8 will _not_ optimize a function containing a `try/catch` block.

### Conditionals and loops

- Always put the opening of the statement (including the opening brace) on the
  first line, start the body on the second line, and close the statement with a
  single curly brace (or `else` clause) on the last line.
- For `else` clauses, close the previous statement and open the `else` statement
  on the same line.
- Use the ternary operator (`condition ? true_value : false_value`) only if it's
  extremely clear what the expression is doing. The maintainer will ultimately
  decide whether its use is merited.

### Output

- All output should go through the `logger` member of the `ReactionIssueFiler`
  variable. It should be instantiated using the `Logger` class, which is a
  wrapper that adheres to the [log npm](https://www.npmjs.com/package/log)
  interface.

### Gotchas

- With Promises, ensure that one of `resolve` or `reject` is _always_ called,
  otherwise the Promise will not ever produce a result.
  - Alternatively, it may be desirable or necessary to use `return
    Promise.resolve()` or `return Promise.reject()` as an alternative.
- When creating Promise chains, always remember to `return` the next Promise
  from the previous Promise's `.then()` or `.catch()` handler. Otherwise the
  handler will return undefined, which will break the chain. (The next Promise
  will still execute, but whatever follows it will not wait for it to resolve.)
  - Node v6.6.0 and higher will now issue warnings if rejected `Promises` are
    not handled, or handled asynchronously. See
    https://github.com/mbland/hubot-slack-github-issues/pull/7 for details.

## Open Source License

This software is made available as [Open Source
software](https://opensource.org/osd-annotated) under the [ISC
License](https://www.isc.org/downloads/software-support-policy/isc-license/).
For the text of the license, see the [LICENSE](LICENSE.md) file.
