import {Component, Input, OnInit} from '@angular/core';
import {DataEl} from "../../../models/dataEl";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
@Input() data? :DataEl[]
  constructor() { }

  ngOnInit(): void {
  }

}
