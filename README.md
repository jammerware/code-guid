# CodeGuid README

Welcome to CodeGuid! It's a simple extension to VS Code that allows access to a simple GUID generator for development.

> **THE MOST IMPORTANT OF NOTES**: GUIDs are fun, cool, and hip, and they come up a lot (for me, at least) in testing and prototyping. However, the actual generation of real-live GUIDs is one of those computer-sciency things, I'm pretty sure. The method I'm using to generate GUIDs is really simple and not cryptographically secure, so don't use these for anything other than development. Go forth and CodeGuid!

## Features

- Easy creation/copying of GUIDs via the Command Palette: ![See it in action!](images/demo.gif)
- A customizable keybinding for same (bound by default to ALT+G, ALT+G or CMD+G CMD+G on Mac)
- The option to turn off the probably-annoying notification that happens when the guid is generated using the config flag `codeGuid.showNotificationWhenGuidGenerated`

## Known Issues

I'm using [copy-paste](https://github.com/xavi-/node-copy-paste) to deliver clipboard access. It doesn't seem to have an error callback if something goes wrong. Maybe it never will? I have absolute faith in [xavi](https://github.com/xavi-), whoever that blessed soul is.

## Coming soon (I hope)

Snippet-like insertion of generated GUIDs. I'm not positive this is possible in the current Code API, as I think snippets have to be language-specific. Give me a break, I just started this today.

## Release Notes

### 1.0.0

CodeGuid is born!