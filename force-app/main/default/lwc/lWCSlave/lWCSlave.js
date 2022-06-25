import { api, LightningElement } from 'lwc';

export default class LWCSlave extends LightningElement {
    @api userNameVal;
    @api userEmailVal;
    @api userPhoneVal;
    @api userAddressVal;


    @api
    displayChildValueAction(namestr){
       this.userNameVal = namestr.getUserName;
       this.userEmailVal = namestr.getUserEmail;
       this.userPhoneVal = namestr.geUserPhone;
       this.userAddressVal = namestr.getUserAddress;
    }

}