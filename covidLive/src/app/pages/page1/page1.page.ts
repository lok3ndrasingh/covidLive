import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalCases} from 'src/app/pages/GlobalCases';
import {map} from 'rxjs/operators';
// import { Chart } from 'chart.js';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  resp: any;
  globalCases: GlobalCases = null;
  globalCasesData: any =[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
     // tslint:disable-next-line: max-line-length
    
    // this.globalCases = new GlobalCases(this.resp);
    // console.log("iuiuiu"+this.globalCases.activeCasesCriticalPercentage);
    // this.globalCasesData[0] = this.globalCases;
    this.apiRequest();
    this.dothis();
    
    
  }

  async apiRequest()
  {
    await this.http.get('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats').pipe ( map ((x: any) => { return x.data;
  })).subscribe( response => {
    this.resp = response;
    console.log(response);
    this.globalCases = new GlobalCases(this.resp);
    this.globalCasesData[0] = this.globalCases;
  }
    );

  }

  async dothis()
  {
    console.log("Button Clicked");
    // this.globalCases = await new GlobalCases(this.resp);
    // console.log("iuiuiu"+this.globalCases.activeCasesCriticalPercentage);
    // this.globalCasesData[0] = this.globalCases;
  }
}