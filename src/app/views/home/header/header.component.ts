import { Component, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionSearch, ionLogoInstagram, ionLogoFacebook, ionLogoLinkedin, ionLogoTiktok, ionCart, ionLogIn } from '@ng-icons/ionicons';
import { ScrollService } from '../../../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent],
  template: '<ng-icon [svg]="icon" />',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  viewProviders: [provideIcons({ ionSearch, ionLogoInstagram, ionLogoFacebook, ionLogoLinkedin, ionLogoTiktok, ionCart, ionLogIn })]
})
export class HeaderComponent implements OnInit, OnDestroy {

  constructor(
    private scrollService: ScrollService,
    private renderer: Renderer2 
  ) { }

  ngOnInit(): void {
    this.scrollService.addScrollListener(this.onScroll);
  }

  ngOnDestroy(): void {
    this.scrollService.removeScrollListener(this.onScroll);
  }

  onScroll = (): void => {
    const menu = document.getElementById('menu');
    if (menu) {
      if (window.scrollY > 0) {
        this.renderer.addClass(menu, 'black-bg');
      } else {
        this.renderer.removeClass(menu, 'black-bg');
      }
    }
  }

  @Input() icon: string | undefined;
}
