import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule} from 'angular-datatables';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddPersonneComponent } from './add-personne/add-personne.component';
import { PersonneListComponent } from './personne-list/personne-list.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HeaderComponent } from './Shared/header/header.component';
import { GalaryComponent } from './galary/galary.component';
import { CloudinaryConfiguration, CloudinaryModule } from '@cloudinary/angular-5.x';
import { FileUploadModule } from 'ng2-file-upload';
import { Cloudinary } from 'cloudinary-core';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { PretListComponent } from './pret-list/pret-list.component';
import { PretAddComponent } from './pret-add/pret-add.component';
import { LoginComponent } from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
import {RegisterComponent} from './register/register.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {HomeComponent} from './home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AddBookComponent,
    AddPersonneComponent,
    PersonneListComponent,
    FooterComponent,
    HeaderComponent,
    GalaryComponent,
    ImageUploadComponent,
    PretListComponent,
    PretAddComponent,
    LoginComponent,
    ProfileComponent,
    BoardAdminComponent,
    RegisterComponent,
    BoardUserComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,

    // tslint:disable-next-line:max-line-length
    CloudinaryModule.forRoot({Cloudinary}, { cloud_name: 'di6xj6n6h', api_key: '537132184893388', api_secret: 'ejqHEIUJhI4QK1EhRRjBA-FVZ-A', upload_preset: 'aminamh' } as CloudinaryConfiguration),
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
