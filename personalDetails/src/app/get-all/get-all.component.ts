import { Component, OnInit } from '@angular/core';
import { DisplayService } from './display.service';
import { Observable } from 'rxjs';
import { Details } from '../model/details';

@Component({
  selector: 'app-get-all',
  templateUrl: './get-all.component.html',
  styleUrls: ['./get-all.component.css']
})
export class GetAllComponent implements OnInit {

  personaldetails:Observable<Details>;
  
  constructor(private getService : DisplayService) { }

  ngOnInit() {
    this.personaldetails = this.getService.getdetails();
  }
}
