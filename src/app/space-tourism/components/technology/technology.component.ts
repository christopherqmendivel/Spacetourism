import { Component } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Technology } from '../../interfaces/technology.interface';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {

  public title: string = 'space launch 101';

  public techList: Technology[] = this.dataService.data$.value.technology;
  public currentTech: Technology = this.techList[0];

  constructor(private dataService: DataService ){}


  changeCurrent(id: number ){
    this.currentTech = this.techList[id];
  }
}
