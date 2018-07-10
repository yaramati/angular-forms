import { Component } from '@angular/core';
import {DlDateTimePickerComponent} from 'angular-bootstrap-datetimepicker';

import { Hero }    from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  model = new Hero(1, 'Amol',1234567890 , 1001,new Date);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(2, '', 0,0,new Date);
  }
}