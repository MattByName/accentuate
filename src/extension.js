/* extension.js
 *

 */

/* exported init */
const Gio = imports.gi.Gio;
const ShellVersion = imports.misc.config.PACKAGE_VERSION.split('.');

const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();
let ExtensionPath;
if (ShellVersion[1] === 2) {
    ExtensionPath = ExtensionSystem.extensionMeta['colortint@matt.serverus.co.uk'].path;
} else {
    ExtensionPath = imports.misc.extensionUtils.getCurrentExtension().path;
}

function getCharacters(search_char) {
    let characters = loadCharacters()
    for (const character of characters)
	if (character.name == search_char)
	    return character.accented
    }

function loadCharacters() {
    file = Gio.file_new_for_path(ExtensionPath + '/characters.json');
    [flag, data] = file.load_contents(null);

    if (flag) {
        const ByteArray = imports.byteArray;
        let prepData = (data instanceof Uint8Array) ? ByteArray.toString(data) : data.toString();
        characters = JSON.parse(prepData);
    }
    return characters
}

function getCharacterKey() {
    

}

function init(meta) {
    log(`initializing ${meta.metadata.name}`);
}


function enable() {
    log(`enabling ${Me.metadata.name}`);
    log(getCharacters("a"))
    //activate keybinds
}


function disable() {
    log(`disabling ${Me.metadata.name}`);
    //deactivate keybinds
    //kill all objects
}
