import { signal, property, tool, onready, node } from '../../../decorators';

@tool // make the script runnable in godot editor
export default class Button1 extends godot.Button {

    public button1Configs (text: string): void {
        this.set_text(text) // this.text
    }
    
	_ready (): void {
        this.button1Configs('Hit')
    }

    _input (event: any): void {

    }

    _on_Button1_pressed() {

    }

    _process (delta: any): void {

        if (this.is_hovered()){
           //console.log('Emmit Signal')
        }

        // console.log(this.is_pressed())
        // console.log(this.is_hovered())
    }

}