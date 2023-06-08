import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Property: Array<any> =[{
    "Id": 1,
    "Name": "Birla House",
    "Type": "House",
    "Price": 12000
  }]

  constructor(){

  }
  ngOnInit(): void {
    
  }
}
