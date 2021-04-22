import { signal } from '../../decorators';

export default class SceneManager extends godot.CanvasLayer {

    @signal
    readonly scene_changed: boolean = false

    g_animation_player: godot.AnimationPlayer

    _ready(): void {
        this.g_animation_player = this.$('./ColorRect/AnimationPlayer') as godot.AnimationPlayer
        this.g_on_scene_change()
    }

    async g_on_scene_change() {
        console.log('scene changer')
        await godot.yield(this.get_tree().create_timer(2), 'timeout')
        this.g_animation_player.play("fade")

        await godot.yield(this.get_tree().create_timer(4), 'timeout')
        this.g_animation_player.play_backwards("fade")
    }

}