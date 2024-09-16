// CONTROLLER
import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgFor } from '@angular/common';
import { Client, Prestataire } from './personne.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: 'vue.html',
})
export class App {
  client1 = new Client('Hardy', 'Jack', 45, 'jackhardy@gmail.com', 'VEOLIA');
  client2 = new Client('Hette', 'Henry', 30, 'henry@gmail.com', 'SUEZ');

  presta = new Prestataire('Doe', 'John', 24, 'johndoe@gmail.com', [
    this.client1,
    this.client2,
  ]);

  // entreprise = new GrandeEntreprise(..., ...[], ...[], ...);

  add(cli: Client) {
    this.presta.clients.push(cli);
  }

  remove(cli: Client) {
    this.presta.clients = this.presta.clients.filter((el) => el.nom != cli.nom);
  }
}

bootstrapApplication(App);
