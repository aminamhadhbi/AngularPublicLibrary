import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {BookService} from '../services/book.service';
import {CloudinaryService} from '../services/cloudinary.service';
import {Subject} from 'rxjs';
import {Book} from '../book';
import {FormControl, FormGroup} from '@angular/forms';
import {PretService} from '../services/pret.service';
import {Pret} from '../pret';

@Component({
  selector: 'app-pret-list',
  templateUrl: './pret-list.component.html',
  styleUrls: ['./pret-list.component.css']
})
export class PretListComponent implements OnInit {

          constructor(private pretservice: PretService,
                      public cloudinaryService: CloudinaryService,
                      private cdr: ChangeDetectorRef
  ) { }


  booksArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


 prets: Object;
  pret: Pret = new Pret();
  deleteMessage = false;
  pretlist: any;
  isupdated = false;

  pretupdateform = new FormGroup({

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
    this.pretservice.getPretList().subscribe(data => {
      this.prets = data;
      this.dtTrigger.next();
    });

  }

  deleteBook(id: number) {
    this.pretservice.deletePret(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage = true;
          this.pretservice.getPretList().subscribe(data => {
            this.prets = data;
          });
        },
        error => console.log(error));
  }






  updateBook(updstu) {
    this.pret = new Pret();
    this.pret.dateDebut = this.dateDebutl.value;
    this.pret.dateRetour = this.dateRetourl.value;
    this.pretservice.updatePret(this.pret.id , this.pret).subscribe(
      data => {
        this.isupdated = true;
        this.pretservice.getPretList().subscribe(data => {
          this.prets = data;
        });
      },
      error => console.log(error));
  }

  get dateRetourl() {
    return this.pretupdateform.get('dateRetour');
  }
  get dateDebutl() {
    return this.pretupdateform.get('dateDebut');
  }




  changeisUpdate() {
    this.isupdated = false;
  }}
