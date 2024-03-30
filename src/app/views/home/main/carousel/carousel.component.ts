import { CommonModule } from '@angular/common';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel'; 
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {  } from '@ng-icons/ionicons';

@Component({
 selector: 'app-carousel',
 standalone: true,
 imports: [CommonModule, SlickCarouselModule, NgIconComponent],
 templateUrl: './carousel.component.html',
 styleUrl: './carousel.component.scss',
 viewProviders: [provideIcons({  })]
})
export class CarouselComponent implements OnInit {
  slides = [
    { img: "/assets/imagens/main-top.jpg" },
    { img: "/assets/imagens/main-top-02.jpg" },
    { img: "/assets/imagens/main-top-03.jpg" },
    { img: "/assets/imagens/main-top-04.jpg" }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    infinite: true,
    dots: true,
    swipeToSlide: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  @ViewChild(SlickCarouselComponent, { static: true }) slickCarousel!: SlickCarouselComponent;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.addClickListenerToCarousel();
  }

  private addClickListenerToCarousel(): void {
    const carouselElement = this.elementRef.nativeElement.querySelector('.slick-list');

    if (carouselElement) {
      carouselElement.addEventListener('click', (event: MouseEvent) => {
        const clickX = event.clientX;
        const carouselRect = carouselElement.getBoundingClientRect();
        const carouselCenterX = carouselRect.left + carouselRect.width / 2;

        if (clickX < carouselCenterX) {
          this.slickCarousel.slickPrev();
        } else {
          this.slickCarousel.slickNext();
        }
      });
    }
  }
  prevSlide(): void {
    this.slickCarousel.slickPrev();
  }

  nextSlide(): void {
    this.slickCarousel.slickNext();
  }
}