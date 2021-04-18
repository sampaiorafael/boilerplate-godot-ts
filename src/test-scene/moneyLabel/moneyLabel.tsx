import { signal, property, tool, onready, node } from '../../../decorators';
import Button1 from '../button1/button1'

@tool // make the script runnable in godot editor
export default class moneyLabel extends godot.Label {

    public g_money: number

    public setMoney (value: number) {
        this.g_money = value
        this.set_text(`Money = ${this.g_money}`)
    }

	_ready (): void {
        this.setMoney(0)
    }

    _process (delta: any) {

    }

}