import { Component, OnInit } from '@angular/core';
import { StaticDataService } from '../../static-data.service';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.css']
})
export class MenuAddComponent implements OnInit {

  cuisines:any[];
  constructor(private staticdataService:StaticDataService) { }

  ngOnInit(): void {
    //this.staticdataService.getCuisines()

  }

}
