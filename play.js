var play = {
    create: function() {
        this.sky = game.add.sprite(0, 0, 'sky');
        this.skymirror = game.add.sprite(1024, 0, 'skymirror');
        this.sky.scale.y = 2.0;
        this.skymirror.scale.y = 2.0;
        this.olee = this.game.add.audio('olee');
        this.olee.volume = 1.5;
        this.olee.play()
        this.fin = this.game.add.audio('bf');
        this.space = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.powerade = game.add.group();
        this.powerade.createMultiple(5, 'powerade');
        this.powerade.setAll('checkWorldBounds', true);
        this.powerade.setAll('outOfBoundsKill', true);
        this.powerade.enableBody = true;
        this.powerade.scale.setTo(1.27, 1.27);
        this.poweradef = game.add.group();
        this.poweradef.createMultiple(5, 'poweradef');
        this.poweradef.setAll('checkWorldBounds', true);
        this.poweradef.setAll('outOfBoundsKill', true);
        this.poweradef.enableBody = true;
        this.poweradef.scale.setTo(1.27, 1.27);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.player = this.game.add.sprite(W / 2, H / 2 - 100, 'nisse');
        this.player.scale.setTo(0.3, 0.3);
        game.physics.arcade.enable(this.player);
        game.physics.arcade.enable(this.powerade);
        game.physics.arcade.enable(this.poweradef);
        this.player.anchor.setTo(0.5, 0.5);
        this.score = 0;

        this.scoretext = this.game.add.text(200, 20, "JULEGAVER: 0", {
            font: "35px Arial",
            fill: "#ff0000",
            align: "center"
        });
        this.besttext = this.game.add.text(220, 80, "REKORD: " + BEST, {
            font: "35px Arial",
            fill: "#fff",
            align: "center"
        });
        this.player.body.setSize(420, 420, 25, 25);
        this.player.body.gravity.y = 1600;
        this.timer = this.game.time.events.loop(1800, this.add_p, this);
        this.game.time.events.loop(1800, this.updateScore, this);

    },
    update: function() {
        if (this.player.angle < 20) this.player.angle += 1;
        game.input.onDown.add(this.jump, this);
        this.space.onDown.add(this.jump, this);
        if (this.player.inWorld == false) this.restart();
        game.physics.arcade.collide(this.player, this.powerade, 0, this.restart, this);
        game.physics.arcade.collide(this.player, this.poweradef, 0, this.restart, this);
        if (game.time.now > this.finTime) {
            this.fin.play();
            this.finTime += 22000;
        }

      if (this.sky.x < -1024) {
        this.sky.x = 1024;
        this.sky.x -= 0.2;
      } else {}
        this.sky.x -=0.2;

      if (this.skymirror.x < -1024) {
        this.skymirror.x = 1024;
        this.skymirror.x -= 0.2;
      } else {}
        this.skymirror.x -=0.2;


    },
    render: function() {
        game.debug.body(this.powerade)
    },
    jump: function() {
        this.player.body.velocity.y = -600;
        tweenz = this.game.add.tween(this.player);
        tweenz.to({
            angle: -20
        }, 100);
        tweenz.start();

    },
    restart: function() {
        this.olee.stop();
        this.olee.stop();
        this.olee.stop();
        game.state.start('menu')
    },
    add_p: function() {
        var power = this.powerade.getFirstDead();
        var power2 = this.poweradef.getFirstDead();
        power.body.setSize(169, 581, 50, 90);
        power2.body.setSize(169, 581, 50, 40);
        var random = Math.floor(Math.random() * 400) - 200;
        power.reset(W, -275 + random);
        power2.reset(W, 550 + random);
        power.body.velocity.x = -250;
        power2.body.velocity.x = -250
    },
    updateScore: function() {
        this.score += 1;
        if (this.score > BEST) {
            BEST = this.score;
            document.cookie = 'bestcookie='+BEST+'; expires=Fri, 1 Aug 2020 20:47:11 UTC; path=/';
        }
        this.scoretext.text = "JULEGAVER: " + this.score;
        this.besttext.text = "REKORD: " + BEST
    },


}
