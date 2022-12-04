import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../book';
import { Observable, Subject } from 'rxjs';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CloudinaryService} from '../services/cloudinary.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  blob = new Array<Blob>();
  fileupload: File = new File(this.blob, '');
  imageurl: string | ArrayBuffer | null = null;
 constructor(private bookservice: BookService,
             public cloudinaryService: CloudinaryService,
             private cdr: ChangeDetectorRef
 ) { }


  booksArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  books: Object;
  book: Book = new Book();
  deleteMessage = false;
  booklist: any;
  isupdated = false;

  bookupdateform = new FormGroup({

    titlel: new FormControl(),
   autherl: new FormControl(),
    typel: new FormControl(),
    languagel: new FormControl(),
    numcopiesl: new FormControl()
  });


  ngOnInit() {
    this.isupdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, 'All']],
      processing: true
    };

    this.cloudinaryService.responses = [];
    this.cloudinaryService.uploadToCloudinary();
    this.bookservice.getBookList().subscribe(data => {
    this.books = data;
    this.dtTrigger.next();
    });

  }

  deleteBook(id: number) {
    this.bookservice.deleteBook(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage = true;
          this.bookservice.getBookList().subscribe(data => {
            this.books = data;
            });
        },
        error => console.log(error));
  }






updateBook(updstu) {
    this.book = new Book();
    this.book.title = this.titlel.value;
    this.book.auther = this.autherl.value;
    this.book.language = this.languagel.value;
    this.book.numofcopies = this.numofcopiesl.value;
    this.book.type = this.typel.value;
    console.log(this.typel.value);


    this.bookservice.updateBook(this.book.id, this.book).subscribe(
      data => {
        this.isupdated = true;
        this.bookservice.getBookList().subscribe(data => {
          this.books = data;
        });
      },
      error => console.log(error));
  }

  get numofcopiesl() {
    return this.bookupdateform.get('numcopies');
  }
  get languagel() {
    return this.bookupdateform.get('language');
  }

  get autherl() {
  return this.bookupdateform.get('auther');
  }

  get titlel() {
    return this.bookupdateform.get('title');
  }
   get typel() {
    return this.bookupdateform.get('type');
  }



 changeisUpdate() {
   this.isupdated = false;
 }


  imageSelectForUpload(event: { target: HTMLInputElement }) {
    this.fileupload = event.target.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(this.fileupload);
    reader.onload = (event) => {
      this.imageurl = reader.result;
      console.log(this.imageurl.toString());
      this.cdr.detectChanges();
    };

  }
}
