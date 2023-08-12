import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { InfoHomeComponent } from './components/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { DestinationComponent } from './components/destination/destination.component';
import { CrewComponent } from './components/crew/crew.component';
import { TechnologyComponent } from './components/technology/technology.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    InfoHomeComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    HomeComponent
  ]
})
export class SpaceTourismModule { }
