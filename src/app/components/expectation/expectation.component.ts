import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { interval, timer } from 'rxjs';


@Component({
  selector: 'app-expectation',
  templateUrl: './expectation.component.html',
  styleUrls: ['./expectation.component.scss']
})
export class ExpectationComponent implements OnInit {

  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  end: any;
  now: any;
  day: any;
  hours: any;
  minutes: any;
  seconds: any;
  source = timer(0, 1000);
  clock: any;
  constructor(){}



  ngOnInit(): void {
    this.clock = this.source.subscribe(t => {
      this.now = new Date();
      this.end = new Date('02/14/2022' +' 00:00');
      this.showDate();

      // setTimeout(function(){ 
      //   let audio = new Audio();
      //     audio.src = "../../../assets/kiss.mp3";
      //     audio.load();
      //     audio.play();
      //     audio.pause();
      // }, 3000);

      
    });
  }
  
  showDate(){
    let distance = this.end - this.now;
    this.day = Math.floor(distance / this._day);
    this.hours = Math.floor((distance % this._day) / this._hour);
    this.minutes = Math.floor((distance % this._hour) / this._minute);
    this.seconds = Math.floor((distance % this._minute) / this._second);
  }



}
