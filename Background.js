class Background {
    constructor(game) {

    };

    update() {

    };

    draw(ctx) {
        ctx.drawImage(ASSET_MANAGER.getAsset("./img/background.png"), 0, 0, 1022, 480);
    }
}