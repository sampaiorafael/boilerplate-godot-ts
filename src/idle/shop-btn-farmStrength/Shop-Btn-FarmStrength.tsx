import { signal, property, tool, onready, node } from '../../../decorators';
import Global from '../global/Global'

@tool
export default class ShopBtnFarmStrength extends godot.Button {

    public price: number = 10
    
    public increaseFarmStrength () {
        Global.setFarmStrength = Global.getFarmStrength + 1
        Global.setPlayerGold = Global.getPlayerGold - this.price
    }
  
    _process (delta): void {
        if (this.is_pressed() && Global.getPlayerGold >= this.price){
            this.increaseFarmStrength()
        }
    } 

}