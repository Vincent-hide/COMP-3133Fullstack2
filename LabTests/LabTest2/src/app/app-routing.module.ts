import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MissionComponent} from './mission/mission.component';
import {MissionlistComponent} from './missionlist/missionlist.component';

const routes: Routes = [
  {
    path: 'mission/:id',
    component: MissionComponent,
    pathMatch: 'full'
  },
  {
    path: 'mission',
    component: MissionlistComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'mission',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
