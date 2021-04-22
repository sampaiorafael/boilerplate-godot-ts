export default class Scenario extends godot.Sprite {

    readonly velocity: number = -150.0
    g_texture_width: number = 0

    _ready() {
        this.g_texture_width = this.texture.get_size().x * this.scale.x
    }

    _process(delta): void {
        this.position = new godot.Vector2(this.position.x + this.velocity, 160)
        this.g_reposition()
    }

    g_reposition(): void {
        if(this.position.x < -this.g_texture_width) {
            this.position = new godot.Vector2(this.position.x + 2 * this.g_texture_width, 160)
        }
    }
}