import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ButtonDirective } from './button.directive';
import { FormComponent } from './form/form.component';
import { CustComponent } from './cust/cust.component';
import { SqrPipe } from './sqr.pipe';
import { SalutationPipe } from './salutation.pipe';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactivedrivenformComponent } from './reactivedrivenform/reactivedrivenform.component';
import { DateService } from './date.service';
import { BookserviceService } from './bookservice.service';
import { ParentchildComponent } from './parentchild/parentchild.component';
import { OutputComponent } from './output/output.component';
import { LoginpassingdatabetweencomponentsComponent } from './loginpassingdatabetweencomponents/loginpassingdatabetweencomponents.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonDirective,
    FormComponent,
    CustComponent,
    SqrPipe,
    SalutationPipe,
    TemplatedrivenformComponent,
    ReactivedrivenformComponent,
    ParentchildComponent,
    OutputComponent,
    LoginpassingdatabetweencomponentsComponent,
    CourseListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [DateService,BookserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
