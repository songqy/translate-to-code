import * as vscode from "vscode";

// todo translate
function translate(chiness: string) {
  return `translate to ${chiness}`;
}

export default () => {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  const ranges = editor.selections;
  ranges.forEach((range) => {
    const text = editor.document.getText(range);
    if (!text) {
      return;
    }
    const position = new vscode.Position(
      range.start.line,
      range.start.character
    );

    const targetText = translate(text);
    editor.edit((editBuilder) => {
      editBuilder.delete(range);
      editBuilder.replace(position, targetText);

      vscode.window.showInformationMessage(
        `translate ${text} to ${targetText} success`
      );
    });
  });
};
