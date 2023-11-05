import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor() { }

  @HostBinding('class.new-nav') newNav:boolean;

  @HostListener('window:scroll') onscroll(){
    console.log(window.scrollY);

    if(window.scrollY >= 50){
      this.newNav = true;
    }else{
      this.newNav =false;
    }
  }
}
