import { Component, OnInit } from '@angular/core';

import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  countryList: any[];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this._dataService.getCountryNames().subscribe((res) => {
      console.log(res);
      this.countryList = res['result'];
      console.log('country List', this.countryList);
    });
  }

}
