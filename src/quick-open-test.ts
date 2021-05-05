import * as theia from '@theia/plugin';

export function start(context: theia.PluginContext) {
    context.subscriptions.push(theia.commands.registerCommand({
        id: 'quick-open-Test',
        label: "Test Quick-open"
    }, async () => {
        const result = await theia.window.showInputBox({
            validateInput: text => {
                theia.window.showInformationMessage(`Validating: ${text}`);
                // return text.length === 0 ? 'Error' : undefined;
                return 'Error';
            }
        });
        theia.window.showInformationMessage(`Got: ${result}`);
    }));

}

export function stop() {
}