import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ObjectService} from '../services/object.service'

@Component({
  selector: 'child-obj',
  templateUrl: './child-obj.component.html',
  styleUrls: ['./child-obj.component.css']
})
export class ChildObjComponent implements OnInit {
  @Input() name:string;
  @Output() handleTerm = new EventEmitter();
  
  show:boolean = true;
   list: Object[];

  constructor(private _objectService:ObjectService) { }

  ngOnInit() {
     this.getProductList();
  }

  toggle(){
    this.show ? this.show = false : this.show = true;
  }
  changeName(newName: string){
    this.handleTerm.emit(newName)
  }

  getProductList() {
    //this.list = this._objectService.getItems();
    this._objectService.getItems()
    .subscribe((myList)=>{
      this.list = myList;
    })
  }

}
