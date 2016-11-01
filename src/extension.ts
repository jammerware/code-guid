'use strict';

import * as vscode from 'vscode';
import { Guid } from './models/guid';

let ncp = require('copy-paste');

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('codeGuid.generateGuid', () => {
        // get configuration
        let config = vscode.workspace.getConfiguration('codeGuid'); 

        let guid = Guid.newGuid();
        ncp.copy(guid);

        if(config.get('showNotificationWhenGuidGenerated')) {
            vscode.window.showInformationMessage(`Copied GUID "${guid}" to your clipboard!`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
}