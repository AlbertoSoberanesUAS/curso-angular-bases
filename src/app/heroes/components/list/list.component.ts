import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];
  public deletedHero?: string = '';

  public deleteLastHeroe(): void {
    this.deletedHero = this.heroes.pop();
  }

}
