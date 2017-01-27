# slack-github-issues v1.1.0

This version prevents errors by ignoring reactions from direct messages and properly getting channel (actually, "group") info from private channel messages, courtesy of [Greg Walker](https://github.com/mgwalker).

## A Node.js package for using Slack `reaction_added` events to file GitHub issues

Source: https://github.com/mbland/slack-github-issues

When a [Slack](https://slack.com/) chat message receives a specific emoji reaction, this package creates a [GitHub](https://github.com/) issue with a link to that message.

This feature is for teams who use Slack to communicate and GitHub to track issues. It provides an easy way to file an issue (just add a specific emoji to a message), which helps team members (even non-technical ones!) quickly document or act upon important parts of conversations.

This software is made available as [Open Source software](https://opensource.org/osd-annotated) under the [ISC License](https://www.isc.org/downloads/software-support-policy/isc-license/). If you'd care to contribute to this project, be it code fixes, documentation updates, or new features, please read the `CONTRIBUTING.md` file.
