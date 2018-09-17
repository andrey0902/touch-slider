import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DragScrollComponent } from './drag-scroll/drag-scroll.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @ViewChild(DragScrollComponent) public dragScroll: DragScrollComponent;
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

  leftNavDisabled = false;
  rightNavDisabled = false;
  constructor() { }

  ngOnInit() {
    console.log(this.config);
  }

  public next() {
    console.log(this.dragScroll);
    this.dragScroll.moveRight();
  }

  public prev() {
    this.dragScroll.moveLeft();
  }


  leftBoundStat(reachesLeftBound: boolean) {
    this.leftNavDisabled = reachesLeftBound;
  }

  rightBoundStat(reachesRightBound: boolean) {
    this.rightNavDisabled = reachesRightBound;
  }

  onSnapAnimationFinished() {
    console.log('snap animation finished');
  }

}
