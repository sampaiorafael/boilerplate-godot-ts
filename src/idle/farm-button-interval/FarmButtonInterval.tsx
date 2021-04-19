import { signal, property, tool, onready, node } from '../../../decorators';

@tool
export default class FarmButtonInterval extends godot.Timer {

    _ready (): void {
        this.set_wait_time(0.1)
        this.start()
    }
    
}