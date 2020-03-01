import { Component, OnInit } from '@angular/core';
import { StaticDataService } from '../../static-data.service';

@Component({
  selector: 'app-add-cuisine',
  templateUrl: './add-cuisine.component.html',
  styleUrls: ['./add-cuisine.component.css']
})
export class AddCuisineComponent implements OnInit {

  cuisine: any;
  constructor(private staticService:StaticDataService) { }

  ngOnInit(): void {
  }

  addCuisine(){
    this.staticService.addCuisine(this.cuisine);
  }

}
