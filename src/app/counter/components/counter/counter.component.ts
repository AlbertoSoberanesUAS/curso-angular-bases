import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter Component</h1>
    <br>
    <hr>
    <button (click)="decrementar()">-1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="incrementar()">+1</button>
    <h3>{{counter}}</h3>
  `
})
export class CounterComponent {
  public counter: number = 0;
  incrementar(): void {
    this.counter++;
  }
  decrementar(): void {
    this.counter--;
  }
  reset(): void {
    this.counter = 0;
  }
}
