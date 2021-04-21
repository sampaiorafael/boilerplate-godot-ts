import { signal, property, tool, onready, node } from '../../../decorators';
import Configs from '../configs/configs'
import Global from '../global/Global'

export default class ProgressBar extends godot.ProgressBar {

    public g_on_manual_increase (value: number): void {this.g_increase_progress(value)}
    public g_on_auto_worker_increase (value: number): void {this.g_increase_progress(value)}

    public g_configs (): void {
        this.set_percent_visible(Configs.ProgressBar.showPerCent)
        this.set_step(Configs.ProgressBar.step) 
        this.set_value(Configs.ProgressBar.initialVal)
    }

    public g_reset_value_on_max (): void {
        if (this.get_value() >= this.get_max()){
            this.set_value(0)
            this.set_max(this.get_max() + 10)
            this.g_update_player_gold(10)
        }  
    }

    public g_increase_progress (value: number): void {
        this.g_reset_value_on_max()
        this.set_value(this.get_value() + value)
    }

    public g_update_player_gold (value: number): void {
        Global.g_set_player_gold = Global.g_get_player_gold + value
    }
    
	_ready (): void {
        this.$(`../..${Configs.NodePath.ManualFarm}`).connect('g_manual_increase', this, 'g_on_manual_increase')
        this.$(`../..${Configs.NodePath.ShopAutoWorker}`).connect('g_auto_worker_increase', this, 'g_on_auto_worker_increase')
        this.g_configs()
    }

    _process (delta): void {
        this.g_reset_value_on_max()
    }

}