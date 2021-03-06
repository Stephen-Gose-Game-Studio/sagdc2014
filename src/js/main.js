'use strict';

var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'sagdc-game');

window.Utils = require('./utils');
window.playerState = {
    UUID: '',
    inventory: [], // List of Item
    currentlyEquipped: null, // Item
    currentLevel: 'BlueRoom'
}

if (Utils.localStorageSupported()) {
     if (localStorage['playerState'] !== undefined) {
        playerState = Utils.getObject('playerState');
    } else {
        playerState.UUID = Utils.generateUUID();   
        Utils.setObject('playerState', playerState);
    }
} else {
    alert("Local storage not supported - you cannot save!");
}

game.state.add('Boot', require('./states/boot'));
game.state.add('Splash', require('./states/splash'));
game.state.add('Preloader', require('./states/preloader'));
game.state.add('Menu', require('./states/menu'));
game.state.add('Game', require('./states/game'));
game.state.add('BlueRoom', require('./states/blue_test_room'));
game.state.add('RedRoom', require('./states/red_test_room'));

game.state.start('Boot');
