import { Component, OnInit } from '@angular/core';
import { Order } from './order'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /** TO DO
   * make boxes on customer info screen
   * program POS logic for new order
   * 
   */

  title = 'Host Name';
  infoScreen: boolean = true;
  phoneNumber




  orderScreen: boolean = false;
  paymentScreen: boolean = false;
  meatSpecials: boolean = false;
  veggieSpecials: boolean = false;
  orderScreenPizzza: boolean = false;


  testOrder = new Order(1, '1', 'Will', '5302105602', '420 sw 8th street', 'YO', 'Drink')

  ngOnInit() {

  }

  /*-----Info Sreen Logic----- */

  infoScreenSubmit() {
    this.testOrder.phoneNumber = document.getElementById('PhoneInput').value;
    this.testOrder.address = document.getElementById('addressInput').value + ' #' + document.getElementById('roomInput').value;
    this.testOrder.name = document.getElementById('nameInput').value;
    this.testOrder.comments = document.getElementById('commentsInput').value;
    console.log(this.testOrder)
  }


  /*------ Order Screen Logic----- */
  addItem(){
    this.testOrder.items
  }



  /*-----Screen Switches----*/


  infoScreenSwitch() {
    this.infoScreen = true;
    this.orderScreen = false;
    this.paymentScreen = false;
  }

  orderScreenSwitch() {
    this.infoScreen = false;
    this.orderScreen = true;
    this.paymentScreen = false;
  }

  paymentScreenSwitch() {
    this.infoScreen = false;
    this.orderScreen = false;
    this.paymentScreen = true;
  }

  orderScreenPizzaSwitch() {
    console.log('1')
    if (this.orderScreenPizzza == true) {
      this.orderScreenPizzza = false;
      console.log('2')
    } else {
      this.orderScreenPizzza = true;
      console.log('3')
    }
  }

  meatSpecialsShow() {
    console.log('1')
    if (this.meatSpecials == true) {
      this.meatSpecials = false;
      console.log('2')
    } else {
      this.meatSpecials = true;
      console.log('3')
    }
  }
  showId(event) {
    alert(event.target)
  }
  veggieSpecialsShow() {
    console.log('1')
    if (this.veggieSpecials == true) {
      this.veggieSpecials = false;
      console.log('2')
    } else {
      this.veggieSpecials = true;
      console.log('3')
    }
  }



  test() {
    console.log('test')
  }



}
