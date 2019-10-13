import {Component, OnInit, ElementRef} from '@angular/core';

@Component({
    selector: 'app-order-buttons2',
    templateUrl: './OS2buttons.component.html',
    styleUrls: ['./OS2buttons.component.css']
  })

  export class OSbuttons2 implements OnInit{

    isActive: boolean = false;

    ngOnInit() {
        
    }

    constructor(private elementRef: ElementRef){

    }
    
    onClick(event) {
      console.log(event);
      console.log('OSB1')
      if (document.getElementById('OSB2.1').className == "btn btn-outline-primary active"){
        document.getElementById('OSB2.1').className = "btn btn-outline-primary ";
        this.isActive = false;

      } else {
        document.getElementById('OSB2.1').className = "btn btn-outline-primary active";
        document.getElementById('OSB2.2').className = "btn btn-outline-primary";
        document.getElementById('OSB2.3').className = "btn btn-outline-primary";
        this.isActive = true;

      }
    }

      onClick2() {

        console.log('OSB2')
        if (document.getElementById('OSB2.2').className == "btn btn-outline-primary active"){
          document.getElementById('OSB2.2').className = "btn btn-outline-primary ";
          this.isActive = false;

        } else {
          document.getElementById('OSB2.2').className = "btn btn-outline-primary active";
          document.getElementById('OSB2.1').className = "btn btn-outline-primary";
          document.getElementById('OSB2.3').className = "btn btn-outline-primary";
          this.isActive = true;

        }
      }
      onClick3() {

        console.log('OSB3')
        if (document.getElementById('OSB2.3').className == "btn btn-outline-primary active"){
          document.getElementById('OSB2.3').className = "btn btn-outline-primary ";
          this.isActive = false;

        } else {
          document.getElementById('OSB2.3').className = "btn btn-outline-primary active";
          document.getElementById('OSB2.1').className = "btn btn-outline-primary";
          document.getElementById('OSB2.2').className = "btn btn-outline-primary";
          this.isActive = true;

        }       
      }

  }