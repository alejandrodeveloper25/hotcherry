import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: 'app-expectation',
  templateUrl: './expectation.component.html',
  styleUrls: ['./expectation.component.scss']
})
export class ExpectationComponent implements OnInit {
  @ViewChild('scene', { static: true }) scene: any = ElementRef;
  constructor() { }

  ngOnInit(): void {
    
  }

}
