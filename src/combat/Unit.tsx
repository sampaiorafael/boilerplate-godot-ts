import { property, tool } from 'decorators';

@tool
export default class Unit extends godot.Node2D {

    @property({type: godot.VariantType.TYPE_STRING, default: 'Unit'})
    public name: string

    @property({type: godot.VariantType.TYPE_INT, default: 1})
    public level: number

    @property({type: godot.VariantType.TYPE_REAL, default: 5})
    public damage: number

    @property({type: godot.VariantType.TYPE_INT, default: 100})
    public max_hp: number

    @property({type: godot.VariantType.TYPE_INT, default:100})
    public current_hp: number

}