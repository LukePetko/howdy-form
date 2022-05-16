import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { MainFormComponent } from './main-form/main-form.component';

@NgModule({
  declarations: [AppComponent, MainFormComponent],
  imports: [BrowserModule, FormsModule, HttpModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
