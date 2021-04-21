import Configs from '../configs/configs'

export default class global extends godot.Node {

	// Player Gold
	private static g_player_gold: number = Configs.Player.initialGold
	static get g_get_player_gold () {return global.g_player_gold}
	static set g_set_player_gold (value: number) {global.g_player_gold = value}

	constructor() {
		super();
	}
	
}