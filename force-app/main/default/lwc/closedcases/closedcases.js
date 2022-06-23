
import { LightningElement,wire } from 'lwc';
import fetchAllCases from '@salesforce/apex/CasesManager.fetchAllCases';
import fetchCaseDetails from '@salesforce/apex/CasesManager.fetchCaseDetails';
import closeCase from '@salesforce/apex/CasesManager.closeCase';
export default class CaseManager extends LightningElement {
    searchCaseNumber='';
    cases;
    errorDetails;
    caseCloseMessage;

    @wire(fetchAllCases) cases;

    caseNumberChange(event){
        this.searchCaseNumber = event.target.value;
    }

    searchRecords(){
        fetchCaseDetails({caseNumber:this.searchCaseNumber})
        .then(result=>{
            this.cases.data = result;
        })
        .catch(error=>{
            this.errorDetails = error;
        });
    }

    passCaseToClose(event){
        
        this.caseId = event.target.name;
        closeCase({caseId:this.caseId})
        .then(result=>{
            this.caseCloseMessage = result;
        })
        .catch(error=>{
           this.errorDetails = error; 
        });
 
    }
}
