import { signal, property, tool, onready, node } from '../../../decorators';
import Configs from '../configs/configs'
import Global from '../global/Global'
import ManualFarm from '../manual-farm/ManualFarm'

export default class ShopManualStrength extends godot.Button {

    public g_price: number = Configs.ManualFarm.initialPrice
    
    public g_buy_manual_strength () {
        ManualFarm.set_manual_farm_strength = ManualFarm.get_manual_farm_strength + 1
        Global.set_player_gold = Global.get_player_gold - this.g_price
    }
  
    _process (delta): void {
        if (this.is_pressed() && Global.get_player_gold >= this.g_price){
            this.set_disabled(true)
            this.g_buy_manual_strength()
        }
    } 

}