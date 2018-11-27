'use strict';
import * as ncp from 'copy-paste';
import * as vscode from 'vscode';
import {
    TextEditor,
    TextEditorEdit,
} from 'vscode';
import { Guid } from './models/guid';

export function activate(context: vscode.ExtensionContext) {
    const generateGuidToClipboardSub = vscode.commands.registerCommand('codeGuid.generateGuidToClipboard', () => {
        const guid = Guid.newGuid();
        ncp.copy(guid);

        // get configuration
        const config = vscode.workspace.getConfiguration('codeGuid');

        if (config.get('showNotificationWhenGuidGenerated')) {
            vscode.window.showInformationMessage(`Copied GUID "${guid}" to your clipboard!`);
        }
    });

    const generateGuidToCursorSub = vscode.commands.registerTextEditorCommand('codeGuid.insertGuidAtCursor', (textEditor: TextEditor, edit: TextEditorEdit) => {
        edit.insert(textEditor.selection.active, Guid.newGuid());
    });

    context.subscriptions.push(
        generateGuidToClipboardSub,
        generateGuidToCursorSub,
    );
}

// tslint:ignore no-empty
export function deactivate() { /* no-op */ }
