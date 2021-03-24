import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent  {
    inputValue:string="";
  
    myFunc() {
       this.inputValue = ((document.getElementById("exchageRateDate") as HTMLInputElement).value);
  }
}
