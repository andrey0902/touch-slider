import {
  AfterContentChecked, AfterContentInit, AfterViewInit, Directive, ElementRef, EventEmitter, HostBinding, HostListener,
  Input, OnInit, Output
} from '@angular/core';

@Directive({
  selector: '[appDragScrollItem]'
})
export class DragScrollItemDirective implements OnInit, AfterViewInit, AfterContentInit {
  windowLoadWidth = 0;
  @Input('appDragScrollItem') public config;
  @HostBinding('style.display') display = 'flex';
  @Output() public slideMustShow = new EventEmitter();

  @HostListener('window:resize', ['$event.target']) public resetSize (e) {
    this.windowLoadWidth = null;
    console.log(e.innerWidth);
    // this.calculateShowingItem(e.innerWidth);
    // this.slideMustShow.emit(this.calculateShowingItem(e.innerWidth));
    this._elementRef.nativeElement.style.width = `${this.calculateWidthItem(this.calculateShowingItem(this.getWindowWidth()))}px`;
  }

  @HostListener('window:load', ['$event.target']) public windowWidth(e) {
    this.windowLoadWidth = e.body.offsetWidth;
    // console.log('load', e.body.offsetWidth);
  }
  constructor(public _elementRef: ElementRef) {
  }
  ngOnInit(): void {
    console.log(this.config);
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentInit(): void {
    // console.log('parent width1', this._elementRef.nativeElement.parentElement);
    setTimeout(() => {
      // console.log('parent width', this._elementRef.nativeElement.parentElement.offsetWidth);
      // console.log('width of the scrin',  this.calculateWidthItem(this.calculateShowingItem(this.getWindowWidth())));
      this._elementRef.nativeElement.style.width = `${this.calculateWidthItem(this.calculateShowingItem(this.getWindowWidth()))}px`;
    }, 300);
  }

  public calculateShowingItem(windowWidth: number) {
    let slidesToShow = 1;
    const sortList =  this.config.responsive.sort((a, b) => a - b);
      for (let i = 0; i < sortList.length; i++) {
        if (windowWidth >= sortList[i].breakpoint) {
          slidesToShow = sortList[i].settings.slidesToShow;
        }
      }
    return slidesToShow;
  }

  public getWindowWidth() {
    return this.windowLoadWidth || this._elementRef.nativeElement.parentElement.offsetWidth;
  }

  public calculateWidthItem(countShowSlide: number): number {
    const parentWidth: number = this._elementRef.nativeElement.parentElement.offsetWidth;
    return parentWidth / countShowSlide;
  }
}
