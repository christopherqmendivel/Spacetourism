import { Component } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Destination } from '../../interfaces/destination.interface';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent {

  public title: string = 'pick your destination';

  public destinations: Destination[] = this.dataService.data$.value.destinations;
  public currentDestination: Destination = this.destinations[0];
  public animationState: boolean = true;

  constructor(private dataService : DataService) {}


  changeCurrent( id: number ) {
    this.currentDestination = this.destinations[id];
  }

  animate() {
    this.animationState = false;

    setTimeout(() => {
      this.animationState = true;
    }, 1);
  }
}
