import { signal, property, tool, onready, node } from '../../../decorators';
import Global from '../global/Global'

export default class MineProgress extends godot.ProgressBar {

    public g_on_manual_increase (value: number): void {this.g_increase_progress(value)}
    public g_on_auto_worker_increase (value: number): void {this.g_increase_progress(value)}

    public g_configs (step: number, initialVal: number, percentVisible: boolean): void {
        this.set_percent_visible(percentVisible)
        this.set_step(step) 
        this.set_value(initialVal)
    }

    public g_reset_value_on_max (): void {
        if (this.get_value() >= 100){
            this.set_value(0)
            this.g_update_player_gold(10)
        }  
    }

    public g_increase_progress (value: number): void {
        this.g_reset_value_on_max()
        this.set_value(this.get_value() + value)
    }

    public g_update_player_gold (value: number): void {
        Global.set_player_gold = Global.get_player_gold + value
    }
    
	_ready (): void {
        this.$('../ManualFarm').connect('manualIncrease', this, 'g_on_manual_increase')
        this.$('../Shop-AutoWorker').connect('autoWorkerIncrease', this, 'g_on_auto_worker_increase')
        this.g_configs(0.01, 0, true)
    }

    _process (delta): void {
        this.g_reset_value_on_max()
    }

}