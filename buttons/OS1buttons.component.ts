import {Component, OnInit, ElementRef} from '@angular/core';

@Component({
    selector: 'app-order-buttons1',
    templateUrl: './OS1buttons.component.html',
    styleUrls: ['./OS1buttons.component.css']
  })

  export class OS1buttons implements OnInit{

    ngOnInit() {
        this.elementRef.nativeElement.querySelector('button').addEventListener('click', this.onClick.bind(this))
    }

    constructor(private elementRef: ElementRef){

    }
    
    onClick(event) {
        console.log(event);
        console.log('B1')
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