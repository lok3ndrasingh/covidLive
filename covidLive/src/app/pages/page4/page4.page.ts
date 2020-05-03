import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get("https://tools.cdc.gov/api/v2/resources/media/132608.rss").subscribe( res =>
    {
      console.log(res);
    });
  }

}
