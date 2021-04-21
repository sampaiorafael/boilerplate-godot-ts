import { signal, property, tool, onready, node } from '../../../decorators';
import Configs from '../configs/configs'
export default class ManualFarm extends godot.Button {

    @signal
    public readonly manualIncrease: string

    public static g_strength: number = Configs.ManualFarm.initialStrength

    static set setManualFarmStrength (value: number) {
        ManualFarm.g_strength = value
    }

    static get getManualFarmStrength () {
        return ManualFarm.g_strength
    }
    
    _process (delta): void {
        if (this.is_pressed()){
            this.emit_signal('manualIncrease', ManualFarm.g_strength)
            this.set_disabled(true)
        }
    } 

}