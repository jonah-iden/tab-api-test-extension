import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const tabGroups = vscode.window.tabGroups;
	tabGroups.onDidChangeTabs((e:vscode.TabChangeEvent) => {
		e.closed.forEach(t => {
			vscode.window.showInformationMessage('Tab ' + t.label + ' closed.');
		});
	});
	
	let disposable = vscode.commands.registerCommand('tab-test.closeActiveTab', () => {
		const activeTabGroup = tabGroups.activeTabGroup;
		const activeTab = activeTabGroup.activeTab;
		if(activeTab) {
			const activeTabLabel = vscode.window.tabGroups.activeTabGroup.activeTab?.label;
			vscode.window.showInformationMessage('Moin from tab-test! Active: ' + activeTabLabel);

			tabGroups.close(activeTab);
		}
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
