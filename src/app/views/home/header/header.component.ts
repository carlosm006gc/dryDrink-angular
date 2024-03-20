import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionSearch, ionLogoInstagram, ionLogoFacebook, ionLogoLinkedin, ionLogoTiktok, ionCart, ionLogIn } from '@ng-icons/ionicons';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent],
  template: '<ng-icon [svg]="icon" />',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  viewProviders: [provideIcons({ ionSearch, ionLogoInstagram, ionLogoFacebook, ionLogoLinkedin, ionLogoTiktok, ionCart, ionLogIn })]


})
export class HeaderComponent {
  @Input() icon: string | undefined; // Definindo o input 'icon'

}
