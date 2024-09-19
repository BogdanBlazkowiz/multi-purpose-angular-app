import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FunctionButtonComponent } from './function-button/function-button.component';
import { CalculatorComponent } from "./calculator/calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FunctionButtonComponent, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'multi-purpose-angular-app';

}
