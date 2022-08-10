import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {StuDirComponent} from './stu-dir/stu-dir.component';
import {ServiceDemoComponent} from './service-demo/service-demo.component';
import {StudentHttpComponent} from './student-http/student-http.component';

const routes:Routes=[
  {path: 'databinding' ,component: DataBindingComponent },
  {path: 'StuDirComp' ,component:StuDirComponent},
  {path: 'ServiceCo' ,component:ServiceDemoComponent},
  {path: 'studenthttp' ,component:StudentHttpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }