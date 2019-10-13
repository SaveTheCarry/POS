import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-order-buttons',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {


  constructor(
    private elementRef:ElementRef
  ) { 
 
  }

  ngOnInit() {
    this.elementRef.nativeElement.querySelector('button').addEventListener('click', this.onClick.bind(this));
    
    
  }
  onClick(event) {
    console.log(event);
    console.log('1')
    if (this.elementRef.nativeElement.querySelector('button').className == "btn btn-outline-primary active"){
      this.elementRef.nativeElement.querySelector('button').className = "btn btn-outline-primary ";
      console.log('2')
    } else {
      this.elementRef.nativeElement.querySelector('button').className = "btn btn-outline-primary active";
      console.log('3')
    }
    console.log(this.elementRef.nativeElement.querySelector('button').innerText)
    
  }

  

       
    
  
}