import {Component, OnInit, ElementRef} from '@angular/core';

@Component({
    selector: 'app-order-buttons5',
    templateUrl: './OSbuttons5.component.html',
    styleUrls: ['./OSbuttons5.component.css']
  })

  export class OSbuttons5 implements OnInit{

    ngOnInit() {
        this.elementRef.nativeElement.querySelector('button').addEventListener('click', this.onClick.bind(this))
    }

    constructor(private elementRef: ElementRef){

    }
    
    onClick(event) {
        console.log(event);
        console.log('OSB5')
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