export default class global extends godot.Node {

	private static playerGold: number = 0
	private static farmStrength: number = 10

	static get getPlayerGold() {
		return global.playerGold
	}

	static set setPlayerGold (value: number) {
		global.playerGold = value
	}

	static get getFarmStrength () {
		return global.farmStrength
	}

	static set setFarmStrength (value: number) {
		global.farmStrength = value
	}

	constructor() {
		super();
	}
	
}