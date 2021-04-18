import { property, tool } from 'decorators';
import Unit from '../Unit';

@tool
export default class BattleHUD extends godot.Node {
 
    public g_name_text: string
    public g_level_text: number
    public g_health_bar: Object

    _ready() {
       
    }

    _process() {
        // setupHUD(unit)
    }

    public setupHud(unit: Unit): void {
        this.g_name_text = unit.name
        this.g_level_text = unit.level
        this.g_health_bar['total'] = unit.max_hp
        this.g_health_bar['value'] = unit.current_hp
    }

    public setHud(unit: Unit): void {
        //set unit hud
    }

    public setHP(hp: number): void {
        //set unit hud
    }
}