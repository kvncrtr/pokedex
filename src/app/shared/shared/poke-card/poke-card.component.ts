import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {
  @Input() cardData: any;
  inTeam = false;
  img = '../../../../assets/type-badges/'
  charm = '../../../../assets/type-charm-backgrounds/'

  ngOnInit(): void {
    // console.log(this.cardData.name)
  }
}
