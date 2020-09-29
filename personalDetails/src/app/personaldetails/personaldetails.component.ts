import { Component, OnInit } from '@angular/core';
import { DetailsService } from './details.service';
import { FormGroup, FormControl, Validators, } from '@angular/forms';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {
  detailsForm = new FormGroup({
    name: new FormControl("", Validators.required),
    dob: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    height: new FormControl("", Validators.required),
    weight: new FormControl("", Validators.required),
    hobbies: new FormControl("", Validators.required)
  });
  constructor(private detailsService: DetailsService) { }

  ngOnInit() {
  }

  personalDetails() {
    if (this.detailsForm.valid) {
      this.detailsService.pdetails(this.detailsForm.value).subscribe(res => {
        this.detailsForm.reset();
      });
    }
  }

}
