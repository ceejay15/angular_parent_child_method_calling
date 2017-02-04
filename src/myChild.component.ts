import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: 'page/childpage.html'
})
export class myChildComponent implements OnInit{
   page:number;
   isactive:string;
   p2=false;
   
   ngOnInit(){
      this.page=1;	
	  this.isactive="1";
	  console.log('active',this.isactive);  
      this.showPage(this.page, this.isactive);
   }
   
   showPage(page, isactive){
   		this.page=page;
		if((page==2) && (isactive=='2')){
			this.p2=true;
		}
		this.isactive=isactive;
   }
   
   unloadForm(){
     this.p2=false;
	 this.showPage(1,'1');
   }

    
}
