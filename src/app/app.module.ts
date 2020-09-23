import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { EnrolleesComponent } from './enrollees/enrollees.component';
import { LoginComponent } from './login/login.component';
import { EditEnrolleeComponent } from './edit-enrollee/edit-enrollee.component';


@NgModule({
  declarations: [
    AppComponent,
    EnrolleesComponent,
    LoginComponent,
    EditEnrolleeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
