import * as assert from 'assert';
import * as vscode from 'vscode';
import * as codeGuid from '../src/extension';

suite("The extension", () => {
    test("registers the expected config setting name", () => {
        let config = vscode.workspace.getConfiguration('codeGuid');

        assert.ok(config);
    });
});