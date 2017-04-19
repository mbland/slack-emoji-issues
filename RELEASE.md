# slack-github-issues v1.1.1

This is a bugfix/maintenance release.

The plugin no longer logs error messages for file and file comment messages; it ignores them instead. Support for file and file comment reactions may be added in the future if the demand exists, but isn't straightforward, since there's no one specific channel associated with either.

The `./go` script now downloads [mbland/go-script-bash](https://github.com/mbland/go-script-bash) v1.5.0 automatically rather than having it attached to this repository as a submodule.

## A Node.js package for using Slack `reaction_added` events to file GitHub issues

Source: https://github.com/mbland/slack-github-issues

When a [Slack](https://slack.com/) chat message receives a specific emoji reaction, this package creates a [GitHub](https://github.com/) issue with a link to that message.

This feature is for teams who use Slack to communicate and GitHub to track issues. It provides an easy way to file an issue (just add a specific emoji to a message), which helps team members (even non-technical ones!) quickly document or act upon important parts of conversations.

This software is made available as [Open Source software](https://opensource.org/osd-annotated) under the [ISC License](https://www.isc.org/downloads/software-support-policy/isc-license/). If you'd care to contribute to this project, be it code fixes, documentation updates, or new features, please read the `CONTRIBUTING.md` file.
