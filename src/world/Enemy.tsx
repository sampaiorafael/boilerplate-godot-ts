export default class Enemy extends godot.Node2D {

    g_enemy_name: string = 'Goblin'
    g_health: number = 100

    _ready() {
        console.log('Enemy Loaded')
    }

    _on_player_attack(damage: number) {
        console.log('Enemy felt damage')
        this.g_health -= damage
    }

    _process() {
        if(this.g_health <= 0) {
            this.emit_signal('enemy_defeated', true, this.g_enemy_name)
            this.get_parent().remove_child(this)
        }
    }
}