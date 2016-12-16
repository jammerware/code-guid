'use strict';

import * as vscode from 'vscode';
import { 
    Position,
    TextEdit,
    TextEditor,
    TextEditorEdit,
    Uri
} from 'vscode';
import { Guid } from './models/guid';

let ncp = require('copy-paste');

export function activate(context: vscode.ExtensionContext) {
    let generateGuidToClipboardSub = vscode.commands.registerCommand('codeGuid.generateGuidToClipboard', () => {
        let guid = Guid.newGuid();
        ncp.copy(guid);

        // get configuration
        let config = vscode.workspace.getConfiguration('codeGuid'); 

        if(config.get('showNotificationWhenGuidGenerated')) {
            vscode.window.showInformationMessage(`Copied GUID "${guid}" to your clipboard!`);
        }
    });

    let generateGuidToCursorSub = vscode.commands.registerTextEditorCommand('codeGuid.insertGuidAtCursor', (textEditor: TextEditor, edit: TextEditorEdit) => {
        edit.insert(textEditor.selection.active, Guid.newGuid())
    });

    context.subscriptions.push(
        generateGuidToClipboardSub, 
        generateGuidToCursorSub
    );
}

export function deactivate() {
}