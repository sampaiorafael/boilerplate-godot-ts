import { signal, property, tool, onready, node } from '../../../decorators';

@tool // make the script runnable in godot editor
export default class InputLine extends godot.ProgressBar {

    public progressBarVal: number = 0

    public increaseProgressBar (): void {

        if (this.get_value() >= 100 )
            this.progressBarVal = 0
        
        this.set_value(this.progressBarVal)     
    }

    public progressBarConfigs (step: number, percentVisible: boolean): void {
        this.set_percent_visible(percentVisible) // this.percent_visible = true
        this.set_step(step) // this.step = 10
    }

    _input (event: any): void {

    }
    
	_ready (): void {
        this.progressBarConfigs(1, true)
    }

    _process (delta: any): void {

        // Auto Increase
        this.increaseProgressBar()
        this.progressBarVal += 1

    }

}