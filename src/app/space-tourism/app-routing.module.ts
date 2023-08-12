import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceTourismModule } from './space-tourism.module';
import { DestinationComponent } from './components/destination/destination.component';
import { HomeComponent } from './pages/home/home.component';
import { CrewComponent } from './components/crew/crew.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { InfoHomeComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: InfoHomeComponent
  },
  {
    path: 'destination',
    component: DestinationComponent
  },
  {
    path: 'crew',
    component: CrewComponent
  },
  {
    path: 'technology',
    component: TechnologyComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
