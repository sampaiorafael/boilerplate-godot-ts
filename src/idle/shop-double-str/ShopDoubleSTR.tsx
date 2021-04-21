import { signal, property, tool, onready, node, gdclass } from '../../../decorators';
import Configs from '../configs/configs'
import Global from '../global/Global'
import ShopAutoWorker from '../shop-auto-worker/ShopAutoWorker'

export default class ShopDoubleSTR extends godot.Button {

    public g_node_shop_auto_worker: godot.Button

    public g_price: number = 100
    public g_timer: godot.Timer = new godot.Timer()
    public g_current_manual_farm_str: number

    public g_on_timeout (): void {
        ShopAutoWorker.g_strength_multiplier -= 1
    }

    public g_timer_configs (): void {
        this.add_child(this.g_timer)
        this.g_timer.set_wait_time(10)
        this.g_timer.set_one_shot(true)
        this.g_timer.connect('timeout', this, 'g_on_timeout')
    }

    _ready (): void {
        this.g_node_shop_auto_worker = this.$(`..${Configs.NodePath.ShopAutoWorker}`) as godot.Button
        this.g_timer_configs()
    }

    _process (delta): void {
        if (this.is_pressed() && Global.g_get_player_gold >= this.g_price){
            this.set_disabled(true)
            Global.g_set_player_gold = Global.g_get_player_gold - this.g_price
            ShopAutoWorker.g_strength_multiplier += 1
            this.g_timer.start()
        }
    } 

}