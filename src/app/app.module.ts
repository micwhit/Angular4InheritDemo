import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ChildObjComponent } from './child-obj/child-obj.component';
import { ParentObjComponent } from './parent-obj/parent-obj.component';

import{ObjectService} from './services/object.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildObjComponent,
    ParentObjComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ObjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
