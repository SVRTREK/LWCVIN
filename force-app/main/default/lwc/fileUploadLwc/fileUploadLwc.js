import { LightningElement, api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class LwcFileUpload extends LightningElement {
    @api
    myRecordId;

    get acceptedFileItem() {
        return ['.pdf', '.png', '.pdf'];
    }

    uploadFiledAction(event) {
        // Get the list of uploaded files
        const uploadedFiles = event.detail.files;
       // alert("No. of files uploaded : " + uploadedFiles.length);
        const toastEvent = new ShowToastEvent({
            title:'Files uploaded successfully',
            message:'No. of files uploaded ' + uploadedFiles.length,
            variant:'success',
        })
        this.dispatchEvent(toastEvent);
    }
}