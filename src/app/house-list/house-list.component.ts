import { Component, OnInit } from '@angular/core';
import { HouseListService } from './house.list.service';
import { IHouse } from './house';

@Component({
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {


  showImage: boolean = false;
  pageTitle: string = 'House List!';
  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string = '';
  _listFilter: string = '';
  filteresHouses: IHouse[];
  houses: IHouse[] = [];

  constructor(private houseListService: HouseListService) { }

  ngOnInit(): void {
    this.houseListService.getHouses().subscribe({
      next: houses => {
        this.houses = houses;
        this.filteresHouses = this.houses;
      },
      error: err => this.errorMessage = err
    });
    this._listFilter = '';
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteresHouses = this.listFilter ? this.performFilter(this.listFilter) : this.houses;
  }

  performFilter(filterBy: string): IHouse[] {
    return this.houses.filter(
      (house: IHouse) => house.agency.toLocaleLowerCase().indexOf(filterBy) !== -1
    )
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'House list: ' + message;
  }

}
