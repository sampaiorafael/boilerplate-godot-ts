import { signal, property, tool, onready, node } from '../../../decorators';

@tool // make the script runnable in godot editor
export default class InputLine extends godot.ProgressBar {

    public g_progressBarVal: number = 1

    /**
     * if actual progress bar value >= 100, reset this.progresBarval to 0
     * then increase progress bar by the actual this.progressBarVal number
     * @return void
     */
    public increaseProgressBar (): void {

        if (this.get_value() >= 100 )
            this.g_progressBarVal = 0

        this.set_value(this.g_progressBarVal) // this.value = 10
    }

    /**
     * @param step step value of progressbar progress
     * @param percentVisible progressbar percent visibility
     * @return void
     */
    public progressBarConfigs (step: number, percentVisible: boolean, initialVal: number): void {
        this.set_percent_visible(percentVisible) // this.percent_visible = true
        this.set_step(step) // this.step = 10
        this.set_value(0)
    }

    public _on_Button1_pressed () {
        this.increaseProgressBar()
        this.g_progressBarVal += 10
    }

    @signal
    public readonly complete: string

	_ready (): void {
        this.progressBarConfigs(1, true, 0)
    }

    _process (delta: any) {

        if (this.g_progressBarVal >= 100) {
            console.log('Should emmit')
            this.emit_signal('complete')
        }

        // Auto Increase
        // this.increaseProgressBar()
        // this.g_progressBarVal += 0.2

    }

}