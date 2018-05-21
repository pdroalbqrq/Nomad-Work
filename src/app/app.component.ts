import { Component, OnInit } from '@angular/core';
import { SlimService } from './service/slim.service'

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
 
  title = 'app';
  ngOnInit(): void {

  }

}
