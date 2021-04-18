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
    /**
     * if actual progress bar value >= 100, reset this.progresBarval to 0
     * then increase progress bar by the actual this.progressBarVal number
     * @return void
     */
    increaseProgressBar() {
        if (this.get_value() >= 100)
            this.progressBarVal = 0;
        this.set_value(this.progressBarVal);
    }
    /**
     * @param step step value of progressbar progress
     * @param percentVisible progressbar percent visibility
     */
    progressBarConfigs(step, percentVisible) {
        this.set_percent_visible(percentVisible); // this.percent_visible = true
        this.set_step(step); // this.step = 10
    }
    _input(event) {
    }
    _ready() {
        this.progressBarConfigs(1, true);
    }
    _process(delta) {
        // Auto Increase
        this.increaseProgressBar();
        this.progressBarVal += 1;
    }
};
InputLine = __decorate([
    tool // make the script runnable in godot editor
], InputLine);
export default InputLine;
//# sourceMappingURL=ProgressBar.jsx.map