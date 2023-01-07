class Character {
	constructor(game) {
		this.game = game;
		this.animation = new Animator(ASSET_MANAGER.getAsset("./img/run.png"), -1, 2, 48, 140, 2, .06);
		this.x = 0;
		this.y = 400;
		this.speed = 10;
	};

	update() {
		this.x += this.game.clockTick * this.speed;
		if (this.x > 1022) this.x = -40;
	};

	draw(ctx) {
		this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
	};
}