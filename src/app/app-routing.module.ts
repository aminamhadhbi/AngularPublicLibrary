import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import {AddPersonneComponent} from './add-personne/add-personne.component';
import {PersonneListComponent} from './personne-list/personne-list.component';
import { GalaryComponent} from './galary/galary.component';
import { ImageUploadComponent} from './image-upload/image-upload.component';
import {PretListComponent} from './pret-list/pret-list.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {BoardUserComponent} from './board-user/board-user.component';
import {HomeComponent} from './home/home.component';
import {BoardAdminComponent} from './board-admin/board-admin.component';
const routes: Routes = [
  { path: '', redirectTo: 'Book-list', pathMatch: 'full' },
  { path: 'Book-list', component: BookListComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'Personne', component: PersonneListComponent },
  { path: 'add-Personne', component: AddPersonneComponent },
  { path: 'Galary', component: GalaryComponent},
  { path: 'im', component: ImageUploadComponent},
  { path: 'Pret-list', component: PretListComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'admin', component: BoardAdminComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
