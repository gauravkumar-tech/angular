import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculatorform!:FormGroup ;

  constructor() { }

  ngOnInit(): void {
    this.calculatorform= new FormGroup({
      firstnumber1: new FormControl(null),
      lastname: new FormControl(null),
      dob: new FormControl(null),
      mob: new FormControl(null),
      email: new FormControl(null),
      sex: new FormControl(null),
  }

}
