import { property, tool } from 'decorators';
import Unit from '../Unit';

@tool
export default class Enemy extends Unit {

    @property({default: 'Enemy'})
    public name: string

    @property({default: 1})
    public level: number

    @property({default: 5})
    public damage: number

    @property({default: 100})
    public max_hp: number

    @property({default:100})
    public current_hp: number

    public takeDamage(damage: number): void {
        this.current_hp -= damage
    }

    public isDead(): boolean {
        if(this.current_hp > 0) return false

        return true
    }

}