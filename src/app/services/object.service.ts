import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable'
import {of} from 'rxjs/observable/of';

@Injectable()
export class ObjectService {

getItems():Observable<Object[]> {
   return of([
    {testing:1, name:"Mike"},
    {testing:2, name:"Jamee"},
    {testing:3, name:"Kasey"},
    {testing:4, name:"Meredeth"},
    {testing:5, name:"Dinah"}
     ])
  }

}