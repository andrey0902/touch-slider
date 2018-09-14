import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() public config = {
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 320,
          //сообщает, при какой ширине экрана нужно включать настройки
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        //сообщает, при какой ширине экрана нужно включать настройки
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        //сообщает, при какой ширине экрана нужно включать настройки
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1200,
        //сообщает, при какой ширине экрана нужно включать настройки
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1400,
        //сообщает, при какой ширине экрана нужно включать настройки
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };
  hideScrollbar;
  disabled;
  xDisabled;
  yDisabled;
  imagelist = [
    'luke.png',
    'chubaka.png',
    'boba.png',
    'c3po.png' ,
    'leia.png',
    'obi.png',
    'r2d2.png',
    'storm.png',
    'varder.png',
    'yoda.png',
    'yolo.png'
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.config);
  }

}
