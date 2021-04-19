import { signal, property, tool, onready, node } from '../../../decorators';

import Global from '../global/Global'

@tool
export default class MineProgress extends godot.ProgressBar {

    @signal
    public readonly complete: string

    public g_configs (step: number, initialVal: number, percentVisible: boolean): void {
        this.set_percent_visible(percentVisible)
        this.set_step(step) 
        this.set_value(initialVal)
    }

    public g_resetValueOnMax (): void {
        if (this.get_value() >= 100){
            this.emit_signal('complete', '28', 10)
            this.set_value(0)
            Global.setPlayerGold = Global.getPlayerGold + 10
        }  
    }

    public _on_farmbutton_click (): void {
        this.g_resetValueOnMax()
        this.set_value(this.get_value() + 10)
    }
    
	_ready (): void {
        this.g_configs(0.01, 0, true)
    }

    _process (delta): void {
        this.g_resetValueOnMax()
    }

}