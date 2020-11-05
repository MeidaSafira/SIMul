import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDesign } from '../material-design/material';
import { ScheduleComponent } from './schedule/schedule.component';
import { ListsiswaComponent } from './listsiswa/listsiswa.component';
import { FormsModule } from '@angular/forms';
import { ListsiswaDetailComponent } from './listsiswa-detail/listsiswa-detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
// import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'listsiswa',
        component:ListsiswaComponent
      },
      {
        path:'schedule',
        component:ScheduleComponent
      },
      {
        path:'',
        redirectTo:'/admin/dashboard',
        pathMatch:'full'
      }
    ]
  }
]
@NgModule({
  declarations: [
    AdminComponent, 
    DashboardComponent, 
    ScheduleComponent, 
    ListsiswaComponent, ListsiswaDetailComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialDesign,
    FormsModule,
    MatCardModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule
  ]
})
export class AdminModule { }
