export default class global extends godot.Node {

	private static playerGold: number = 0

	static get getPlayerGold() {
		return global.playerGold
	}

	static set setPlayerGold (value: number) {
		global.playerGold = value
	}

	constructor() {
		super();
		// if (!global.playerGold) {
		// 	global.playerGold = this
		// }
	}
	
}