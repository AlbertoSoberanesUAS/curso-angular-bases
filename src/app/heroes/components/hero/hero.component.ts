import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age:   number = 45;
  public alterego: string = 'Tony Stark';
  public superpower: string = 'Money';

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.alterego} - ${this.age} - ${this.superpower}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
    this.alterego = 'Peter Parker';
    this.superpower = 'Spider Powers';
  }

  changeAge(): void {
    this.age = 16;
  }

  reset(): void {
    this.name = 'Ironman';
    this.age = 45;
    this.alterego = 'Tony Stark';
    this.superpower = 'Money';
  }

}
