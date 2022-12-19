// Jacob Westra
// CS-336, homework 9
// 11/8/22
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss']
})
export class SliderCardComponent {

  // initialize everything
  @Input() question!: string;
  @Input() min: string = "0";
  @Input() max: string = "100";
  @Input() value: number = 0;
  @Input() units?: string; // units optional
  @Output() result: EventEmitter<any> = new EventEmitter();
  @Output() displayResult: EventEmitter<any> = new EventEmitter();



  public inputChanged(event: any) {
    console.log(this.result);
    this.displayResult = this.result;
    this.result.emit(event.value);
    this.value = event.value;
  }
}
