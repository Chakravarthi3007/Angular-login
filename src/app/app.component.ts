import { Component } from '@angular/core';

import { OutputObject } from './output.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toggle = true;
  yesToggle = false;
  noToggle = false;
  inputValue1: number;
  inputValue2: number;
  inputValue3: string = "Add";
  outputObject: OutputObject;

  onClick(event) {
    console.log(event);
    this.toggle = !this.toggle;
  }
  onYesClick() {
    this.yesToggle = !this.yesToggle;
  }
  onNoClick() {
    this.noToggle = !this.noToggle;
  }

  onSubmit(): void {
    console.log(this.inputValue3);
    switch (this.inputValue3) {
      case 'Add':
        this.outputObject = {
          value: this.inputValue1 + this.inputValue2,
          label: "Sum"
        }
        break;
      case 'Sub':
        this.outputObject = {
          value: this.inputValue1 - this.inputValue2,
          label: "Sub"
        }
        break;
      case 'Mul':
        this.outputObject = {
          value: this.inputValue1 * this.inputValue2,
          label: "Mul"
        }
        break;
      case 'Div':
        this.outputObject = {
          value: this.inputValue1 / this.inputValue2,
          label: "Div"
        }
        break;

      default:
        break;
    }
  }

  get getResult(): OutputObject {
    return this.outputObject;
  }
  onLogin(val) {
    this.toggle = val;
  }
}
