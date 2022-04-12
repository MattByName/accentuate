/* extension.js
 *

 */

/* exported init */

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();


function init(meta) {
    log(`initializing ${meta.metadata.name}`);
}


function enable() {
    log(`enabling ${Me.metadata.name}`);
    //activate keybinds
}


function disable() {
    log(`disabling ${Me.metadata.name}`);
    //deactivate keybinds
    //kill all objects
}
