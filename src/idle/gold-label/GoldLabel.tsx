import { signal, property, tool, onready, node } from '../../../decorators';

@tool
export default class GoldLabel extends godot.Label {

    public g_configs (initTxt: string): void {
        this.g_setText(initTxt)
    }

    public g_setText (txt: string): void {
        this.set_text(txt)
    }

	_ready (): void {
        this.g_configs('0')
    }

    _process (delta): void {
        
    }


}