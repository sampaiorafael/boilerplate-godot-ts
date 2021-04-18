var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { tool } from '../../../decorators';
let InputLine = class InputLine extends godot.ProgressBar {
    constructor() {
        super(...arguments);
        this.progressBarVal = 0;
    }
    _input(event) {
    }
    _ready() {
        this.step = 1;
    }
    _process(delta) {
        this.progressBarVal += 0.5;
        if (this.progressBarVal >= 100) {
            this.progressBarVal = 0;
        }
        this.value = this.progressBarVal;
    }
};
InputLine = __decorate([
    tool // make the script runnable in godot editor
], InputLine);
export default InputLine;
//# sourceMappingURL=ProgressBar.jsx.map