import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  counter:number=0;
  click_counter:number=0;
  imagesUrl=["1.webp","2.webp","3.webp","4.webp"];
  currentPath="/assets/"+this.imagesUrl[this.counter];
  clear:any;
  getPervious(e:any){
      if(this.counter>this.imagesUrl.length) this.counter=this.imagesUrl.length-1;
      this.counter--;
      this.currentPath="/assets/"+this.imagesUrl[this.counter]; 
      this.stop_first();
  }
  stop_first(){
    if(this.counter<=0) 
    this.currentPath="/assets/"+this.imagesUrl[0]; 
  }
  getNext(){
      if(this.counter<0) this.counter=0;
      this.counter++;
      this.currentPath="/assets/"+this.imagesUrl[this.counter]; 
      this.stop_last();
  }
  stop_last(){ 
    if(this.counter>=this.imagesUrl.length) 
    this.currentPath="/assets/"+this.imagesUrl[this.imagesUrl.length-1]; 
  }
  start_and_stop(){
    this.click_counter++;
    if(this.click_counter%2==1){
      this.clear=setInterval(()=>{                  
        this.counter++;
        this.is_out_of_range();  
          this.currentPath="/assets/"+this.imagesUrl[this.counter]; 
      }, 3000);
    }
    else if(this.click_counter%2==0) {
      clearInterval(this.clear);
    }
  }
  is_out_of_range(){ 
      if(this.counter>=this.imagesUrl.length || this.counter<=0) this.counter=0;
  }
 
}
