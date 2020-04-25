import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-command-succes',
  templateUrl: './command-succes.page.html',
  styleUrls: ['./command-succes.page.scss'],
})
export class CommandSuccesPage implements OnInit {

  isValided=false;
  command_form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  adress:{
    number:Number,
    street:String,
    city:String
  }

  validation_messages = {
    'street': [
      {type: 'required', message: 'Nom de rue obligatoire.'}
    ],
    'city': [
        {type: 'required', message: 'La ville est obligatoire.'}
    ],
    'number': [
        {type: 'pattern', message: 'Le numéro de rue doit être un entier'}
    ],
};

  ngOnInit() {
    // Création du formulaire avec les contraintes
    this.command_form = this.formBuilder.group({
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
      number: new FormControl('',Validators.pattern('[0-9]*')),
    });
  }

  onSubmit() {
    this.validAdress();
  }

  validAdress(){
    this.isValided=true;
  }

}
