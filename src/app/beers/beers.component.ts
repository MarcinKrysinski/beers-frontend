import { Component, OnInit } from '@angular/core';
import {Beer} from '../model/beer';
import {ApiService} from '../service/api.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  beers: Beer[] = [];
  public beer = {} as Beer;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getBeersInfo();
  }

  public getBeersInfo(){
    this.apiService.getBeersInfo().subscribe(
      res => {
        this.beers = res;
      },
      error => {
        alert('An error has occurred');
      }
    );
  }

}
