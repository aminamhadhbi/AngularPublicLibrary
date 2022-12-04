import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';
import {Subject} from 'rxjs';
import {Book} from '../book';
import {CloudinaryService} from '../services/cloudinary.service';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.css']
})
export class GalaryComponent implements OnInit {
  constructor(private bookservice: BookService,
              public cloudinaryService: CloudinaryService) { }


  booksArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  books: Object;
  book: Book = new Book();

  isupdated = false;



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
      this.dtTrigger.next();  });

  }

}

