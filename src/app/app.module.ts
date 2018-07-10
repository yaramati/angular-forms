import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DlDateTimePickerDateModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    
  ],
  providers: [FormsModule],
  bootstrap: [ AppComponent ]
})
export class AppModule { }