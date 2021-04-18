import { property, tool } from 'decorators';
import { keyMapping } from '../../utils/keyMapping';
import BattleHUD from '../battle-hud/BattleHud';
import Enemy from '../enemy/Enemy';
import Player from '../player/Player';

enum g_battle_states {
    START,
    PLAYERTURN,
    ENEMYTURN,
    WON,
    LOST,
}

@tool
export default class Battle extends godot.Node {

    @property({type: godot.VariantType.TYPE_INT})
    public g_state: number

    public player: Player
    public enemy: Enemy

    public player_hud: BattleHUD
    public enemy_hud: BattleHUD

    public dialog: string

    _ready() {
        this.g_state = g_battle_states.START
        this.setupBattle()
    }

    _process() {
    }

    _input() {
        if (godot.Input.is_action_pressed(keyMapping.ENTER)) this.onAttackButton()
    }

    protected setupBattle (): void {
        //timer

        console.log('battle-started')
        this.g_state = g_battle_states.START

        this.player = new Player()
        this.enemy = new Enemy()
        this.dialog = 'A new battle begin!'

        // this.player_hud.setHud(this.player)
        // this.enemy_hud.setHud(this.enemy)

        this.g_state = g_battle_states.PLAYERTURN
        this.playerTurn()
    }

    protected finishBattle(): void {
        //finish
        if (this.g_state == g_battle_states.WON) this.dialog = 'Victory!'
        if (this.g_state == g_battle_states.LOST) this.dialog = 'Defeat!'
    }

    protected playerTurn(): void {
        console.log('player-action')
        this.dialog = 'Player Action.'
    }

    public onAttackButton(): void {
        if (this.g_state !== g_battle_states.PLAYERTURN) return
        this.playerAttack()
    }

    public onHealButton(): void {
        if (this.g_state !== g_battle_states.PLAYERTURN) return
        this.playerHeal()
    }

    protected playerAttack(): void {
        this.enemy.takeDamage(this.player.damage)
        // this.enemy_hud.setHP(this.enemy.current_hp)
        this.dialog = 'Player Attack!'
        console.log('player-attack')

        if(this.enemy.isDead) {
            this.g_state = g_battle_states.WON
            this.finishBattle()
        }

        this.g_state = g_battle_states.ENEMYTURN
        this.enemyTurn()
    }

    protected playerHeal(): void {
        this.player.heal(10)
        // this.player_hud.setHP(this.player.current_hp)
        this.dialog = "Player has been healed"
        console.log('player-heal')
    }

    protected enemyTurn(): void {
        console.log('enemy-action')
        this.dialog = 'Enemy Action.'

        this.enemyAttack()
    }

    protected enemyAttack() : void {
        this.player.takeDamage(this.player.damage)
        // this.player_hud.setHP(this.player.current_hp)
        this.dialog = 'Enemy Attack!'
        console.log('enemy-attack')

        if(this.player.isDead) {
            this.g_state = g_battle_states.LOST
            this.finishBattle()
        }

        this.g_state = g_battle_states.PLAYERTURN
        this.playerTurn()
    }
}