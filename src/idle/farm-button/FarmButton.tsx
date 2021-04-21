import { signal, property, tool, onready, node } from '../../../decorators';

@tool
export default class FarmButton extends godot.Button {

    public g_farmerBtnTimer: godot.Timer = new godot.Timer()

    @signal
    public readonly click: string

    g_on_timeout_farmerBtnTimer (): void {
        this.set_disabled(false)
    }

    _ready (): void {
        this.add_child(this.g_farmerBtnTimer)
        this.g_farmerBtnTimer.set_wait_time(0.1)
        this.g_farmerBtnTimer.start()
        this.g_farmerBtnTimer.connect('timeout', this, 'g_on_timeout_farmerBtnTimer')
    }
    
    _process (delta): void {
        if (this.is_pressed()){
            this.emit_signal('click')
            this.set_disabled(true)
        }
    } 

}