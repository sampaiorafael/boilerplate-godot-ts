import { signal, property, tool, onready, node } from '../../../decorators';
import Global from '../global/Global'

export default class MineProgress extends godot.ProgressBar {

    public g_on_manualIncrease (value: number): void {this.g_increaseProgress(value)}
    public g_on_autoWorkerIncrease (value: number): void {this.g_increaseProgress(value)}

    public g_configs (step: number, initialVal: number, percentVisible: boolean): void {
        this.set_percent_visible(percentVisible)
        this.set_step(step) 
        this.set_value(initialVal)
    }

    public g_resetValueOnMax (): void {
        if (this.get_value() >= 100){
            this.set_value(0)
            this.g_updateGold(10)
        }  
    }

    public g_increaseProgress (value: number): void {
        this.g_resetValueOnMax()
        this.set_value(this.get_value() + value)
    }

    public g_updateGold (value: number): void {
        Global.setPlayerGold = Global.getPlayerGold + value
    }
    
	_ready (): void {
        this.$('../ManualFarm').connect('manualIncrease', this, 'g_on_manualIncrease')
        this.$('../Shop-AutoWorker').connect('autoWorkerIncrease', this, 'g_on_autoWorkerIncrease')
        this.g_configs(0.01, 0, true)
    }

    _process (delta): void {
        this.g_resetValueOnMax()
    }

}