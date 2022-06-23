import { LightningElement } from 'lwc';

export default class LwcButtonStateful extends LightningElement {
    isSelected = false;
    isSelectedInverse = false;
    isSelectedNoIcon = false;
    isSelectedTextIcon = false;

    handleClick() {
        this.isSelected = !this.isSelected;
    }
    inverseHandleClick() {
        this.isSelectedInverse = !this.isSelectedInverse;
    }
    noIconHandleClick() {
        this.isSelectedNoIcon = !this.isSelectedNoIcon;
    }
    textIconHandleClick() {
        this.isSelectedTextIcon = !this.isSelectedTextIcon;
    }
}