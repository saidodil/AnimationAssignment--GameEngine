class Character {
	constructor(game) {
		this.game = game;
		this.animation = new Animator(ASSET_MANAGER.getAsset("./img/run.png"), 0, 0, 99, 100, 6, 0.075);
		this.x = 0;
		this.y = 295;
		this.speed = 350;
	};

	update() {
		this.x += this.game.clockTick * this.speed;
		if (this.x > 1022) this.x = -40;
	};

	draw(ctx) {
		this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y);
	};
}