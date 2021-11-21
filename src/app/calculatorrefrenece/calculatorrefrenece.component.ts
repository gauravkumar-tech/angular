import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-calculatorrefrenece',
  templateUrl: './calculatorrefrenece.component.html',
  styleUrls: ['./calculatorrefrenece.component.css'],
})
export class CalculatorrefreneceComponent implements OnInit {
  calculatorform!: FormGroup;
  disableYn: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.calculatorform = new FormGroup({
      firstnumber1: new FormControl(null),
      secondnumber: new FormControl(null),
      result: new FormControl(null),
    });
  }

  sum() {
    this.disableYn = false;
  }

  CalculateSum(form: any) {
    let firstVal=form.firstnumber1;
    let secondVal=form.secondnumber;
    let results=Number.parseFloat(firstVal) + Number.parseFloat(secondVal);
    this.calculatorform.patchValue({
      result:results
    })
  }
}
