import { signal, property, tool, onready, node } from '../../../decorators';
import Configs from '../configs/configs'
import Global from '../global/Global'

export default class GoldLabel extends godot.Label {

    public g_node_progressbar: godot.ProgressBar

    public g_set_text (): void {
        this.set_text(` ${Math.ceil(this.g_node_progressbar.get_value())} / ${this.g_node_progressbar.get_max()}`)
    }

    _ready (): void {
        this.g_node_progressbar = this.$(`../../${Configs.NodePath.ProgressBar}`) as godot.ProgressBar
    }

    _process (delta): void {
        this.g_set_text()
    }

}