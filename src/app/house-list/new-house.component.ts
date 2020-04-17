import { Component, OnInit } from '@angular/core';
import { HouseListService } from './house.list.service';

@Component({
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.css']
})
export class NewHouseComponent implements OnInit {
  prefix: string = 'http://localhost:8080/kbk/NewHouse?houseUrl=';
  hazUrl: string = 'https://www.imobiliare.ro/vanzare-case-vile/cluj-napoca/manastur/casa-de-vanzare-5-camere-X7ME0100J?lista=2352250';
  constructor(private houseService: HouseListService) { }

  ngOnInit(): void {
  }

  magic(): void {
    this.houseService.addNewHouse(this.prefix + this.hazUrl).subscribe({
      next: data => {
        console.log(data);
      },
      error: err =>console.log(err)
    })
    console.log('sending ' + this.prefix + this.hazUrl)
  }
}
