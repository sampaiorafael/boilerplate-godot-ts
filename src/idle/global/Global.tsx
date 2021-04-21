import Configs from '../configs/configs'

export default class global extends godot.Node {

	private static playerGold: number = Configs.Player.initialGold

	static get getPlayerGold() {
		return global.playerGold
	}

	static set setPlayerGold (value: number) {
		global.playerGold = value
	}

	constructor() {
		super();
	}
	
}