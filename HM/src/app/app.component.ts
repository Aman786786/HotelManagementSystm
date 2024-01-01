import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HM';
  someValue:string= '';
  somevalues: any[] = [];


  CallSomeLogic(){

    this.somevalues.push(this.someValue)
    this.someValue= " "

  }
  deleteValue() {
   
      this.somevalues.pop();
   
    }


  updateValue(){}

  editValue(){}
}
