import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  itemData: any[] = [];
  currentPage = 0;

  constructor(
    private item: ItemService
  ) {}

  ngOnInit() {
    this.item.getItemData().subscribe((res: any) => {
      let cloneData = [...res.results] 
      cloneData.forEach((obj: any) => {
        this.item.getMoreItemData(obj.name).subscribe(item => {
          this.itemData.push(item)
        })
      })
    })
  }

  pageEvents(event: PageEvent) {
    let index = event.pageIndex * 20
    this.item.getNewItemData(index).subscribe((res: any) => {
      this.itemData.splice(this.currentPage, 20)
      res.results.forEach((results: any) => {
        this.item.getMoreItemData(results.name).subscribe(res => {
            this.itemData.push(res)
          }
        )
      })
    })    
  }

  back() {
    window.history.back()
  }
}
