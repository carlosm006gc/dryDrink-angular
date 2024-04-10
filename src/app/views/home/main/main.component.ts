import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CarouselComponent, CardsComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
