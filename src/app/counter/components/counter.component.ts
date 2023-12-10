import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})

export class CounterComponent  {
  constructor() { }

  public counter: number=0;

  increaseBy(parametro: number):void {
    this.counter=this.counter+parametro;
    }

    reset():void {
      this.counter=0;
      }
}
