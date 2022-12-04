import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';

import {FormControl, FormGroup} from '@angular/forms';
import {PersonneService} from '../services/personne.service';
import {Personne} from '../personne';

@Component({
  selector: 'app-personne-list',
  templateUrl: './personne-list.component.html',
  styleUrls: ['./personne-list.component.css']
})
export class PersonneListComponent implements OnInit {


  constructor(private personneservice: PersonneService) { }

  get nom() {
    return this.personneupdateform.get('nom');
  }

  get prenom() {
    return this.personneupdateform.get('prenom');
  }

  get mail() {
    return this.personneupdateform.get('mail');
  }

  get cin() {
    return this.personneupdateform.get('cin');
  }

  get dateNaissance() {
    return this.personneupdateform.get('dateNaissance');
  }
  get num_tel() {
    return this.personneupdateform.get('num_tel');
  }
  personnesArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  personnes: Observable<Personne[]>;
  personne: Personne = new Personne();
  deleteMessage = false;
  personnelist: any;
  isupdated = false;

  personneupdateform = new FormGroup({
    nom: new FormControl(),
    prenom: new FormControl(),
    mail: new FormControl(),
    cin: new FormControl(),
    dateNaissance: new FormControl(),
    num_tel: new FormControl()
  });


  ngOnInit() {
    this.isupdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave: true,
      lengthMenu: [[6, 16, 20, -1], [6, 16, 20, 'All']],
      processing: true
    };
    this.personneservice.getPersonneList().subscribe(data => {
      this.personnes = data;
      this.dtTrigger.next();
    });
  }

  deletePersonne(id: string) {
    this.personneservice.deletePersonne(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage = true;
          this.personneservice.getPersonneList().subscribe(data => {
            this.personnes = data;
          });
        },
        error => console.log(error));
  }

  updatePersonne(id: number) {
    this.personneservice.getPersonne(id)
      .subscribe(
        data => {
          this.personnelist = data;
        },
        error => console.log(error));
  }

  updatePer(updpersonne) {
    this.personne = new Personne();
    this.personne.nom = this.nom.value;
    this.personne.prenom = this.prenom.value;
    this.personne.mail = this.mail.value;
    this.personne.cin = this.cin.value;
    this.personne.dateNaissance = this.dateNaissance.value;
    this.personne.num_tel = this.num_tel.value;
    console.log(this.num_tel.value);


    this.personneservice.updatePersonne(this.personne.id, this.personne).subscribe(
      data => {
        this.isupdated = true;
        this.personneservice.getPersonneList().subscribe(data => {
          this.personnes = data;
        });
      },
      error => console.log(error));
  }

  changeisUpdate() {
    this.isupdated = false;
  }
}
