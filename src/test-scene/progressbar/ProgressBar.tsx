import { signal, property, tool, onready, node } from '../../../decorators';

@tool // make the script runnable in godot editor
export default class InputLine extends godot.ProgressBar {

    _input (event: any): void {

    }
    
	_ready (): void {
        this.step = 1
    }

    public progressBarVal: number = 0

    _process (delta): void {
        this.progressBarVal += 0.5

        if (this.progressBarVal >= 100) {
            this.progressBarVal = 0
        }

        this.value = this.progressBarVal

    }

}