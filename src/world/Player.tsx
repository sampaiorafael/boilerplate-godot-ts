import { signal } from '../../decorators';
import { keyMapping } from '../utils/keyMapping';

export default class Player extends godot.Node2D {

    @signal
    public readonly click: string

    g_damage: number = 10

    _ready(): void {
        console.log('Player Loaded')
    }

    _input(): void {
        if(godot.Input.is_action_pressed(keyMapping.CLICK)) {
            console.log('Player Attack!')
            this.emit_signal('click', this.g_damage)
        }
    }
}