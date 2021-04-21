import { signal, property, tool, onready, node } from '../../../decorators';
import Configs from '../configs/configs'
export default class ManualFarm extends godot.Button {

    @signal
    public readonly g_manual_increase: string

    //Global
    public static g_strength: number = Configs.ManualFarm.initialStrength
    static set g_set_manual_farm_strength (value: number) {ManualFarm.g_strength = value}
    static get g_get_manual_farm_strength (): number {return ManualFarm.g_strength}
    
    _process (delta): void {
        if (this.is_pressed()){
            this.set_disabled(true)
            this.emit_signal('g_manual_increase', ManualFarm.g_strength)
        }
    } 

}