import { signal, property, tool, onready, node } from '../../../decorators';

@tool
export default class FarmButton extends godot.Button {

    @signal
    public readonly click: string

    _on_farmbuttoninterval_timeout (): void {
        this.set_disabled(false)
    }
    
	_ready (): void {

    }

    _process (delta): void {

        if (this.is_pressed()){
            this.emit_signal('click')
            this.set_disabled(true)
        }

    } 

}