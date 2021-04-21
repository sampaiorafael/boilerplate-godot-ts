import Configs from '../configs/configs'

export default class global extends godot.Node {

	private static player_gold: number = Configs.Player.initialGold

	static get get_player_gold() {
		return global.player_gold
	}

	static set set_player_gold (value: number) {
		global.player_gold = value
	}

	constructor() {
		super();
	}
	
}