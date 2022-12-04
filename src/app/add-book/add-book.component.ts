import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { BookService } from '../services/book.service';
import {FormControl , FormGroup , Validators } from '@angular/forms';
import { Book } from '../book';
import {CloudinaryService} from '../services/cloudinary.service';
import {observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  blob = new Array<Blob>();
  fileupload: File = new File(this.blob, '');
  imgurl: string | ArrayBuffer | null = null;
  book: Book = new Book();
  submitted = false;



  BookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
      numofcopies: new FormControl(),
    imageurl: new FormControl(),
    type: new FormControl(),
      auther: new FormControl(),
    language: new FormControl()
  });




  constructor(public cloudinaryService: CloudinaryService,
              private cdr: ChangeDetectorRef,
              private httpClient: HttpClient,
              private bookservice: BookService,
  ) { }

  ngOnInit() {
  //  this.cloudinaryService.onUploadedPhotoGetLink.subscribe((responseUrl: string) => {
    //  console.log(responseUrl);
    }







  get id() {
    return this.BookForm.get('id');
  }
  get title() {
    return this.BookForm.get('title');
  }
  get language() {
    return this.BookForm.get('language');
  }
  get auther() {
    return this.BookForm.get('auther');
  }
  get imageurl() {
    return this.BookForm.get('imageurl');
  }
  get type() {
    return this.BookForm.get('type');
  }
  get numofcopies() {
    return this.BookForm.get('numcopies');
  }
/*
  imageSelectForUpload(event) {
    const imageFormData = new FormData();
    imageFormData.append('imageurl', this.fileupload, this.fileupload.name);
    this.httpClient.post('http://localhost:8080/upload/image/', imageFormData);
   this.fileupload = event.target.files![0];
  }*/

  onImageUpload(event: any) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imgurl = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }


  onSubmit() {
    this.BookForm.value.imageurl = this.imgurl;
    this.bookservice.createBook(this.BookForm.value)
        .subscribe(data => console.log(data), error => console.log(error));
    this.submitted = true;
  }
}
