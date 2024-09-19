import { Component } from '@angular/core';
import { FunctionButtonComponent } from '../function-button/function-button.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FunctionButtonComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  currentEquation = "0";
  listOfButtons = ["+", "-", "*", "/", "=", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "c", "**", "10**"]
  receivedEmit = (data: string) => {
    switch (data) {
      case "=" :
        this.currentEquation = eval(this.currentEquation)
        break
      case "c" :
        this.currentEquation = "0"
        break
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (this.currentEquation === "0") {
          this.currentEquation = data
        }
        else {
          this.currentEquation += data
        }
        break
      default:
        this.currentEquation += data
    }
  }
}
