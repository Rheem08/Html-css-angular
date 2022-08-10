import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { StuDirComponent } from './stu-dir/stu-dir.component';
import { TextDirective } from './text.directive';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { StudentHttpComponent } from './student-http/student-http.component';
import{ HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    //NewCmpComponent,
    StuDirComponent,
    TextDirective,
    PipesDemoComponent,
    DataBindingComponent,
    ServiceDemoComponent,
    StudentHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
