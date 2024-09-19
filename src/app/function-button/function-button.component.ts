import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-function-button',
  standalone: true,
  imports: [],
  templateUrl: './function-button.component.html',
  styleUrl: './function-button.component.scss'
})
export class FunctionButtonComponent {
  @Input() buttonValue: string = "";
  @Output() buttonEmit = new EventEmitter<string>();
  buttonClick = () => {
    this.buttonEmit.emit(this.buttonValue)
  }
}
