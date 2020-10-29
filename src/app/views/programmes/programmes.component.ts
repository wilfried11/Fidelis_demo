import { Component, HostListener, OnInit } from '@angular/core';
import { TraitProgramLoyalityGenericModel } from '../mock_datas';
import { Service } from '../service';

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.scss'],
  providers: [Service]
})
export class ProgrammesComponent implements OnInit {

  constructor(private service:Service) { }
  programmes: TraitProgramLoyalityGenericModel[]=[];
  CAROUSEL_BREAKPOINT = 768;
  carouselDisplayMode = 'multiple';

  
  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;

  }
  ngOnInit() {
    this.programmes = this.service.getAllProgrammes();
    
    this.slides = this.chunk(this.programmes, 3);

    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (window.innerWidth <= this.CAROUSEL_BREAKPOINT) {
      this.carouselDisplayMode = 'single';
    } else {
      this.carouselDisplayMode = 'multiple';
    }
  }
}
