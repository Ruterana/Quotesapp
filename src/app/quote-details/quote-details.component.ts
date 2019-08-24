import { Component, OnInit,Input } from '@angular/core';
import {quote} from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() Qt:quote;
  // Quote:quote[]=[
  //   {id:1, name:'Don’t wait. Make memories today. Celebrate your life!',Author:'james'  },
  //   {id:2,name:'Life has no limitations, except the ones you make.',Author:'Andrew'},
  //   {id:3,name:'We learn by mistakes',Author:'charlene'},
  //   {id:4,name:'Do what is right, not what is easy nor what is popular.',Author:'john'},
  //   {id:5,name:'Success is not how high you have climbed, but how you make a positive difference to the world.',Author:'Girbert'}
  
  // ]
  constructor() { }

  ngOnInit() {
  }

}
