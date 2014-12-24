var load = {
	preload: function() {
            this.input.maxPointers = 1;
            this.stage.disableVisibilityChange = false;
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = 260;
            this.scale.minHeight = 480;
            this.scale.maxWidth = 640;
            this.scale.maxHeight = 1136;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;
            this.scale.setScreenSize(true);

            game.load.audio('olee', 'assets/setMaximumCompression.mp3')
	        game.stage.backgroundColor = '#ff0000';

            game.add.text(50, 100, "LOADING...", { font: "80px Arial", fill: "#fff", align: "center" });


            game.load.image('sky', 'assets/sky.jpg');
            game.load.image('skymirror', 'assets/sky_mirror.jpg');
            game.load.image('nisse', 'assets/nisse.png');
            game.load.image('powerade', 'assets/powerade.png');
            game.load.image('poweradef', 'assets/powerade_f.png');
            game.load.image('menu', 'assets/bakgrunn.jpg');
            game.load.audio('ah', 'assets/ah.wav');
            game.load.audio('mhm', 'assets/mhm.wav');
	},

	create: function() {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth = 260;
        this.scale.minHeight = 480;
        this.scale.maxWidth = 640;
        this.scale.maxHeight = 1136;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);

        this.game.state.start('menu');
	}
}
