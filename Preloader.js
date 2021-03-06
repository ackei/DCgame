
BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {

		//	These are the assets we loaded in Boot.js
		//	A nice sparkly background and a loading progress bar
		this.background = this.add.sprite(0, 0, 'preloaderBackground');
		this.preloadBar = this.add.sprite(150, 200, 'preloaderBar');
		this.background.width = 800;
		this.background.height = 600;
		//	This sets the preloadBar sprite as a loader sprite.
		//	What that does is automatically crop the sprite from 0 to full-width
		//	as the files below are loaded in.
		this.load.setPreloadSprite(this.preloadBar);

		//	Here we load the rest of the assets our game needs.
		//	As this is just a Project Template I've not provided these assets, swap them for your own.
		this.load.image('titlepage', 'assets/exampleBackground.png');
		this.load.image('playButton', 'assets/playButton.png');//, 'images/play_button.json');
		this.load.audio('titleMusic', 'assets/mainMenu.mp3');
		this.load.audio('gameMusic', 'assets/fearHorror.mp3');
		this.load.atlasJSONHash('axe', 'assets/axeSprites.png', 'assets/axeSprites.json');
    	this.load.spritesheet('ada', 'assets/Ada.png',48,48);
    	this.load.image('teddy', 'assets/teddybearprojectile.png');
    	this.load.image('star', 'assets/star.png');
    	this.load.spritesheet('explosion', 'assets/explosion.png',128,128);
    	this.load.image('HUD', 'assets/platform.png');
    	this.load.image('health', 'assets/zelda-hearts.png');
    	this.load.image('item','assets/firstaid.png');
		//this.load.bitmapFont('caslon', 'fonts/caslon.png', 'fonts/caslon.xml');
		//	+ lots of other required assets here
		this.load.tilemap('cave','assets/test.json',null, Phaser.Tilemap.TILED_JSON);
		this.load.image('tiles','assets/cave.png')

	},

	create: function () {

		//	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
		this.preloadBar.cropEnabled = false;

	},

	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.
		
		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.
		
		if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		{
			this.ready = true;
			this.state.start('MainMenu');
		}

	}

};
