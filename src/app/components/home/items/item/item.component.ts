import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
   
  ngOnInit(): void {
     this.randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }

  back() {
    window.history.back()
  }
}
