import { signal, property, tool, onready, node } from '../../../decorators';
import Configs from '../configs/configs'
import Global from '../global/Global'
import ManualFarm from '../manual-farm/ManualFarm'

export default class ShopManualStrength extends godot.Button {

    public g_price: number = Configs.ManualFarm.initialPrice
    
    public increaseFarmStrength () {
        ManualFarm.setManualFarmStrength = ManualFarm.getManualFarmStrength + 1
        Global.setPlayerGold = Global.getPlayerGold - this.g_price
    }
  
    _process (delta): void {
        if (this.is_pressed() && Global.getPlayerGold >= this.g_price){
            this.increaseFarmStrength()
            this.set_disabled(true)
        }
    } 

}