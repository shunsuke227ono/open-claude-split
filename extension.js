const vscode = require('vscode');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function openClaudeInNewSplit() {
  const groupsBefore = vscode.window.tabGroups.all.length;

  // Create a new group to the right of the last group
  await vscode.commands.executeCommand('workbench.action.focusLastEditorGroup');
  await vscode.commands.executeCommand('workbench.action.newGroupRight');
  await sleep(100);

  // Open Claude (the Claude Code extension always opens in an existing Claude group,
  // ignoring the currently focused group)
  await vscode.commands.executeCommand('claude-vscode.editor.open');
  await sleep(300);

  // Push the active Claude tab to the rightmost (newly created) group.
  // moveEditorToNextGroup stops at the last group, so running it groupsBefore
  // times is always enough regardless of which group Claude opened in.
  for (let i = 0; i < groupsBefore; i++) {
    await vscode.commands.executeCommand('workbench.action.moveEditorToNextGroup');
    await sleep(50);
  }
}

function activate(context) {
  const disposable = vscode.commands.registerCommand(
    'open-claude-split.open',
    openClaudeInNewSplit
  );
  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = { activate, deactivate };
