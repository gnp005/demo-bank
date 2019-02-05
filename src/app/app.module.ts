import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BankDetailsComponent } from "./bank-details/bank-details.component";

@NgModule({
  declarations: [AppComponent, BankDetailsComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: "home", component: BankDetailsComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
