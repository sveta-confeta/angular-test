import {Component, OnInit} from '@angular/core';
import {InfoDataService} from "../../services/info-data.service";
import {DataEl} from "../../models/dataEl";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  data: DataEl[] = []
  tab:string | null ='1'

  constructor(private infoData: InfoDataService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.data = this.infoData.infoData

  }

  readQueryParam(){
    this.tab=this.route.snapshot.queryParamMap.get('tab')
    console.log(this.tab)
  }


}
