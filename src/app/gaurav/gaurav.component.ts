import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gaurav',
  templateUrl: './gaurav.component.html',
  styleUrls: ['./gaurav.component.css']
})
export class GauravComponent implements OnInit {
  gauravForm!:FormGroup ;


  constructor() { }

  ngOnInit(): void {
    this.gauravForm= new FormGroup({
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      dob: new FormControl(null),
      mob: new FormControl(null),
      email: new FormControl(null),
      sex: new FormControl(null),

    });
  }

  savedata(data:any){
    console.log(data);
    
  }

}
