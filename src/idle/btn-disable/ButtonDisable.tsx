import { signal, property, tool, onready, node, gdclass } from '../../../decorators';
import Configs from '../configs/configs'

export default class ButtonDisable extends godot.Timer {

    public g_node_manual_farm: godot.Button
    public g_node_shop_auto_worker: godot.Button
    public g_node_shop_manual_strength: godot.Button 

    public g_on_timeout (): void {
        this.g_node_manual_farm.set_disabled(false)
        this.g_node_shop_auto_worker.set_disabled(false)
        this.g_node_shop_manual_strength.set_disabled(false)
    } 

    _ready (): void {

        this.g_node_manual_farm = this.$('../ManualFarm') as godot.Button
        this.g_node_shop_auto_worker = this.$('../Shop-AutoWorker') as godot.Button
        this.g_node_shop_manual_strength = this.$('../Shop-ManualStrength') as godot.Button

        this.set_wait_time(Configs.ButtonDisable.speed)
        this.start() 
        this.connect('timeout', this, 'g_on_timeout')
    }

}