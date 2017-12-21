import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'parent-obj',
  templateUrl: './parent-obj.component.html',
  styleUrls: ['./parent-obj.component.css']
})
export class ParentObjComponent implements OnInit {
  
  data: string;


  constructor() { }

  ngOnInit() {
    this.data = "Mike";
  }

  setName(newName:string) {
    console.log(newName);
    this.data = newName;
  }

}
