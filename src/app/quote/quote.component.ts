import { Component, OnInit } from '@angular/core';
import {quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  // Quote:quote[]=[
  //   {id:1, name:'Don’t wait. Make memories today. Celebrate your life!'  },
  //   {id:2,name:'Life has no limitations, except the ones you make.'},
  //   {id:3,name:'We learn by mistakes'},
  //   {id:4,name:'Do what is right, not what is easy nor what is popular.'},
  //   {id:5,name:'Success is not how high you have climbed, but how you make a positive difference to the world.'}
  
  // ];
   Quote:quote[]=[
    new quote(1, 'Don’t wait. Make memories today. Celebrate your life!','james' ),
    new quote(2, 'Life has no limitations, except the ones you make.','Andrew'),
  new quote(3,'We learn by mistakes','charlene'),
  new quote(4,'Do what is right, not what is easy nor what is popular.','john'),
  new quote(5,'Success is not how high you have climbed, but how you make a positive difference to the world.','Girbert')
  
  ]
  constructor() { }

  ngOnInit() {
  }

}

