import { signal, property, tool, onready, node } from '../../../decorators';
import Global from '../global/Global'
export default class GoldLabel extends godot.Label {

    public g_setText (txt: string): void {
        this.set_text(txt)
    }

    _process (delta): void {
        this.g_setText(`${Global.getPlayerGold}`)
    }

}