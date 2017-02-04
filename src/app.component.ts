import { Component, ViewChild } from '@angular/core';
import {myChildComponent} from './myChild.component';

@Component({
  selector: 'my-app',
  templateUrl:'page/parentpage.html',
  directives:[myChildComponent]
  
})
export class AppComponent {
   @ViewChild(myChildComponent)
     private myChild: myChildComponent;

   openTab(){		
		this.myChild.showPage(2,'2');	   
   }
}
