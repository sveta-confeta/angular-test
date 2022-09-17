import {Component, Input, OnInit} from '@angular/core';
import {DataEl} from "../../../models/dataEl";

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.css']
})
export class OutcomeComponent implements OnInit {
  @Input() data? :DataEl[]
  constructor() { }

  ngOnInit(): void {
  }

}
