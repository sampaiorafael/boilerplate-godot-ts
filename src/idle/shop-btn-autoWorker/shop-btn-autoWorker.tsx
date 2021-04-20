import { signal, property, tool, onready, node } from '../../../decorators';

@tool
export default class ShopBtnAutoWorker extends godot.Button {

    public g_workerPrice: number = 50
    public g_workerTimer: godot.Timer = new godot.Timer()
    public g_workerCount: number = 0
    public g_workerStrength: number = 1

    public g_on_workerTimer_timeout (): void {
        console.log('hi')
    }

    _ready (): void {
        this.add_child(this.g_workerTimer)
        this.g_workerTimer.set_wait_time(3)
        this.g_workerTimer.start()
        this.g_workerTimer.connect('timeout', this, 'g_on_workerTimer_timeout')
    }

    _process (delta): void {

    } 

}