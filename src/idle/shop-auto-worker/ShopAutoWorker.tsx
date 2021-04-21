import { signal, property, tool, onready, node, gdclass } from '../../../decorators';
import Configs from '../configs/configs'
import Global from '../global/Global'

export default class ShopAutoWorker extends godot.Button {

    @signal
    public readonly g_auto_worker_increase: string

    // Global
    public static g_strength_multiplier: number = 1
    //public get g_get_auto_worker_strength_multiplier () {return ShopAutoWorker.g_strength_multiplier}
    //public set g_set_auto_worker_strength_multiplier (value: number) {ShopAutoWorker.g_strength_multiplier = value}
    
    // Props
    public g_price: number = Configs.AutoWorker.initialPrice
    public g_count: number = Configs.AutoWorker.initialCount
    public g_strength: number = Configs.AutoWorker.initialStrength
    public g_timer: godot.Timer = new godot.Timer()

    public g_on_timeout (): void {
        this.emit_signal('g_auto_worker_increase', (this.g_count * this.g_strength) * ShopAutoWorker.g_strength_multiplier)
    } 

    public g_buy_new_worker () {
        this.g_count += 1
        Global.g_set_player_gold = Global.g_get_player_gold - this.g_price
    }

    _ready (): void {
        this.add_child(this.g_timer)
        this.g_timer.set_wait_time(Configs.AutoWorker.initialSpeed)
        this.g_timer.start()
        this.g_timer.connect('timeout', this, 'g_on_timeout')
    }

    _process (delta): void {
        if (this.is_pressed() && Global.g_get_player_gold >= this.g_price){
            this.set_disabled(true)
            this.g_buy_new_worker()
        }
    } 

}