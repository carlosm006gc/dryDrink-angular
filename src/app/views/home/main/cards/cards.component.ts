import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  showText: boolean[] = [false, false, false]; // Um elemento booleano para cada card

  toggleText(index: number) {
    this.showText[index] = !this.showText[index];
  }
}
