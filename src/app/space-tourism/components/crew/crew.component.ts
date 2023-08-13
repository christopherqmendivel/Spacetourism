import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Crew } from '../../interfaces/crew.interface';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent {

  public title: string = 'meet your crew';
  public crewList: Crew[] = this.dataService.data$.value.crew;
  public currentCrew: Crew = this.crewList[0];

  constructor(private dataService: DataService ) {}

  changeCurrent( id: number ) {
    this.currentCrew = this.crewList[id];
  }
}
