import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PersonneService} from '../services/personne.service';
import {Personne} from '../personne';



@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {



  constructor(private personneservice: PersonneService) { }
  get id() {
    return this.personnesaveform.get('id');
  }
  get nom() {
    return this.personnesaveform.get('nom');
  }

  get prenom() {
    return this.personnesaveform.get('prenom');
  }

  get mail() {
    return this.personnesaveform.get('mail');
  }

  get cin() {
    return this.personnesaveform.get('cin');
  }

  get num_tel() {
    return this.personnesaveform.get('num_tel');
  }
  get dateNaissance() {
    return this.personnesaveform.get('dateNaissance');
  }

  personne: Personne = new Personne();
  submitted = false;

  personnesaveform = new FormGroup({
    nom: new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    prenom: new FormControl('', [Validators.required, Validators.minLength(5)]),
    mail: new FormControl('', [Validators.required , Validators.email ]),
    cin: new FormControl('', [Validators.required , Validators.minLength(5)]),
    num_tel: new FormControl(),
    dateNaissance: new FormControl()
  });

  ngOnInit() {
    this.submitted = false;
  }

  savePersonne(savePersonne) {
    this.personne = new Personne();
    this.personne.id = this.id.value;
    this.personne.nom = this.nom.value;
    this.personne.prenom = this.prenom.value;
    this.personne.mail = this.mail.value;
    this.personne.cin = this.cin.value;
    this.personne.num_tel = this.num_tel.value;
    this.personne.dateNaissance = this.dateNaissance.value;
    this.submitted = true;
    this.save();
  }



  save() {
    this.personneservice.createPersonne(this.personne)
      .subscribe(data => console.log(data), error => console.log(error));
    this.personne = new Personne();
  }

  addPersonneForm() {
    this.submitted = false;
    this.personnesaveform.reset();
  }
}
