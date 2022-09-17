import {Component, Input, OnInit} from '@angular/core';
import {DataEl} from "../../../models/dataEl";

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {
  @Input() data? :DataEl[]


  ngOnInit(): void {
  }

}
