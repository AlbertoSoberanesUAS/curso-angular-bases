import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Curso de Angular: De cero a experto (Angular 10+)';
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
