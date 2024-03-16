import { Component, Input } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent],
  template: '<ng-icon [svg]="icon" />',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() icon: string | undefined; // Definindo o input 'icon'

}
