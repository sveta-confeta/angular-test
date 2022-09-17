import {Component, Input, OnInit} from '@angular/core';
import {DataEl} from "../../../models/dataEl";

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  @Input() data? :DataEl[]

  ngOnInit(): void {
  }

}
