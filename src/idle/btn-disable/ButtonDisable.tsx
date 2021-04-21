import { signal, property, tool, onready, node, gdclass } from '../../../decorators';
import Configs from '../configs/configs'

export default class ButtonDisable extends godot.Timer {

    public g_node_manualFarm: godot.Button
    public g_node_shopAutoWorker: godot.Button
    public g_node_shopManualStrength: godot.Button 

    public g_on_timeout (): void {
        this.g_node_manualFarm.set_disabled(false)
        this.g_node_shopAutoWorker.set_disabled(false)
        this.g_node_shopManualStrength.set_disabled(false)
    } 

    _ready (): void {

        this.g_node_manualFarm = this.$('../ManualFarm') as godot.Button
        this.g_node_shopAutoWorker = this.$('../Shop-AutoWorker') as godot.Button
        this.g_node_shopManualStrength = this.$('../Shop-ManualStrength') as godot.Button

        this.set_wait_time(Configs.ButtonDisable.speed)
        this.start() 
        this.connect('timeout', this, 'g_on_timeout')
    }

}