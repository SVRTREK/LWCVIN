import { LightningElement, track } from 'lwc';

export default class LwcCustomRadioButton extends LightningElement {
    value = 'Salesforce LWC';
 
    get options() {
        return [
            { label: 'Salesforce LWC', value: 'Salesforce LWC' },
            { label: 'Tutorial', value: 'Tutorial' },
            { label: 'Tech Guide', value: 'Tech Guide' },
            { label: 'Blog', value: 'Blog' },
            { label: 'Aura Component', value: 'Aura Component' },
            { label: 'Vinod', value: 'Vinod' },
        ];
    }
    @track salesforceLwcFieldValue = true;
    @track tutorialFieldValue = false;
    @track techGuideFieldValue = false;
    @track blogFieldValue = false; 
    @track auraCompFieldValue = false;
    @track VinodTechiesvalue = false;

 
    handleRadioChange(event) {
        const selectedOption = event.detail.value;
        //alert('selectedOption ' + selectedOption);
        if (selectedOption == 'Salesforce LWC'){
            this.salesforceLwcFieldValue = true;
        }
        else{
            this.salesforceLwcFieldValue = false;
        }

        if (selectedOption == 'Tutorial'){
            this.tutorialFieldValue = true;
        }else{
            this.tutorialFieldValue = false;
        }
        
 
        if (selectedOption == 'Tech Guide'){
            this.techGuideFieldValue = true;
        }else{
            this.techGuideFieldValue = false;
        }

        if (selectedOption == 'Blog'){
            this.blogFieldValue = true;
        }else{
            this.blogFieldValue = false;
        }
        
 
      if (selectedOption == 'Aura Component'){
            this.auraCompFieldValue = true;
        }
        else{
            this.auraCompFieldValue = false;
        }
        if (selectedOption == 'Vinod'){
            this.VinodTechiesvalue = true;
        }
        else{
            this.VinodTechiesvalue = false;
        }
    }
}