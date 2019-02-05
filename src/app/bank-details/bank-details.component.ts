import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
@Component({
  selector: "app-bank-details",
  templateUrl: "./bank-details.component.html",
  styleUrls: ["./bank-details.component.css"]
})
export class BankDetailsComponent implements OnInit {
  //  div-1 Code
  public details = [
    {
      bankKey: "Bank Key",
      bankName: "Bank Name",
      bankBranch: "Bank branch",
      smart: "Smart",
      countryName: "Country Name",
      dummy: "Dummy text",
      city: "City Name",
      branch: "Branch Name",
      bankGroup: "Bank Group"
    }
  ];
  public currentAccount = this.details[0];
  // end of div one code.
  bankDetails: FormGroup;

  modeOfPayment = new FormControl();
  additionalComments = new FormControl();
  ihan = new FormControl();
  bankType = new FormControl();
  currencies = new FormControl();
  bankAccount = new FormControl();
  controlKey = new FormControl();
  referenceDetails = new FormControl();
  accountFields = new FormControl();
  dmcIndicator = new FormControl();
  instructorKey = new FormControl();
  pdo = new FormControl();
  textArea = new FormControl();

  constructor(fb: FormBuilder) {
    this.bankDetails = fb.group({
      modeOfPayment: this.modeOfPayment,
      additionalComments: this.additionalComments,
      ihan: this.ihan,
      bankType: this.bankType,
      currencies: this.currencies,
      bankAccount: this.bankAccount,
      controlKey: this.controlKey,
      referenceDetails: this.referenceDetails,
      accountFields: this.accountFields,
      dmcIndicator: this.dmcIndicator,
      instructorKey: this.instructorKey,
      pdo: this.pdo,
      textArea: this.textArea
    });
  }

  ngOnInit() {}

  public save() {
    console.log(this.bankDetails);
    this.bankDetails.reset();
  }

  public clearForm() {
    this.bankDetails.reset();
  }

  public addBankAccount() {
    console.log("account added.");
    this.bankDetails.reset();
  }
}
