import { signal, property, tool, onready, node, gdclass } from '../../../decorators';
import Configs from '../configs/configs'
import Global from '../global/Global'

export default class ShopAutoWorker extends godot.Button {

    @signal
    public readonly g_autoWorkerIncrease: string

    public g_price: number = Configs.AutoWorker.initialPrice
    public g_count: number = Configs.AutoWorker.initialCount
    public g_strength: number = Configs.AutoWorker.initialStrength
    public g_timer: godot.Timer = new godot.Timer()

    public g_on_timeout (): void {
        this.emit_signal('g_autoWorkerIncrease', this.g_count * this.g_strength)
    } 

    public g_newWorker () {
        this.g_count += 1
        Global.setPlayerGold = Global.getPlayerGold - this.g_price
    }

    _ready (): void {
        this.add_child(this.g_timer)
        this.g_timer.set_wait_time(1)
        this.g_timer.start()
        this.g_timer.connect('timeout', this, 'g_on_timeout')
    }

    _process (delta): void {
        if (this.is_pressed() && Global.getPlayerGold >= this.g_price){
            this.set_disabled(true)
            this.g_newWorker()
        }
    } 

}