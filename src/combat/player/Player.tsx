import { property, tool } from 'decorators';
import Unit from '../Unit';

@tool
export default class Player extends Unit {

    @property({default: 'Player'})
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

    public heal(amount: number): void {
        this.current_hp += amount
        if (this.current_hp >= this.max_hp) this.current_hp = this.max_hp
    }

    public isDead(): boolean {
        if(this.current_hp > 0) return false

        return true
    }
}