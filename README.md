# Open Claude in New Split

A VS Code extension that opens a new [Claude Code](https://marketplace.visualstudio.com/items?itemName=Anthropic.claude-code) session in a new split pane to the right — with a single shortcut.

## The Problem

When running multiple Claude Code agents in parallel, you want each session in its own split pane. But the Claude Code extension always opens new sessions in the same editor group, ignoring the currently focused group. There's no built-in way to open Claude directly into a new split.

## Solution

Press **`Ctrl+Option+N`** (Mac) / **`Ctrl+Alt+N`** (Windows/Linux) to:

1. Create a new editor group to the right
2. Open a new Claude Code session
3. Move it into the new group automatically

Press it multiple times to keep adding Claude sessions side by side.

## Installation

### Option A: Install from .vsix (easiest)

1. Download `open-claude-split-X.X.X.vsix` from [Releases](https://github.com/shunsukeono/open-claude-split/releases)
2. Run:
   ```
   code --install-extension open-claude-split-X.X.X.vsix
   ```

### Option B: Install from source

```bash
git clone https://github.com/shunsukeono/open-claude-split
cp -r open-claude-split ~/.vscode/extensions/open-claude-split-0.1.0
```

Then add to `~/.vscode/extensions/extensions.json` (see [manual install guide](https://github.com/shunsukeono/open-claude-split/wiki/Manual-Install)).

## Requirements

- [Claude Code VS Code extension](https://marketplace.visualstudio.com/items?itemName=Anthropic.claude-code) must be installed

## License

MIT
