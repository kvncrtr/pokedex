import { Component, OnInit } from '@angular/core';
import { RegionsService } from 'src/app/shared/services/regions.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  regionsData: any[] = [];
  dexData: any[] = [];
  regionCoverImg = '../../../../assets/gen-backgrounds/'

  constructor(
    private regions: RegionsService
  ) {}

  ngOnInit(): void {
    this.initRequest()
  }

  initRequest() {
    this.regions.getRegionsData().subscribe((data: any) => {
      data.results.forEach((info: any) => {
        this.regions.getRegionsMoreData(info.name).subscribe((res: any) => {
          this.regionsData.push(res);
          this.regionsData.length === 10 ? this.regionsData.sort((a, b) => a.id - b.id) : null;
        })
      })
    })
  }

  back() {
    window.history.back()
  }
}
