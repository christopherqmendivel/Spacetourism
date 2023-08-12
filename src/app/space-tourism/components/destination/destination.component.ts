import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit{

  public title: string = 'pick your destination';
  public destinationList: string[] = ['moon', 'mars', 'europa', 'titan'];

  constructor(private dataService : DataService) {}
  ngOnInit(): void {
    console.log(this.dataService.data$.value.destinations[0])
  }


  get Image() {
    return this.dataService.data$.value.destinations[0].images.png;
  }

  get Title() {
    return this.dataService.data$.value.destinations[0].name
  }

  get Description() {
      return this.dataService.data$.value.destinations[0].description;
  }

  destination() {
    console.log('prueba')
  }

  get distanceKM() {
    return this.dataService.data$.value.destinations[0].distance;
  }

  get distanceDays() {
    return this.dataService.data$.value.destinations[0].travel;
  }


}
