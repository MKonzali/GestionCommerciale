import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {ClientService} from '../../services/client.service';
import {Router} from '@angular/router';
import {Client} from '../../model/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  pageClients: any;
  nom: String = '';
  ville: String = '';
  categorie: String = '';
  id_categorie : Number = 1;
  domaine: String = '';
  currentPage: Number = 0;
  size: Number = 5;
  pages: Array<number>;

  constructor(private http: Http, public clients : ClientService, public router: Router) { }

  ngOnInit() {
    this.doSearch();
  }

  doSearch() {
    this.clients.getClients(this.nom,this.ville,this.domaine,this.id_categorie, this.currentPage, this.size)
      .subscribe(data => {
          this.pageClients = data;
          this.pages = new Array(data.totalPages);
        },
        err => { console.log(err); });
  }

  chercher() {
    this.doSearch();
  }

  goToPage(i: Number) {
    this.currentPage = i;
    this.doSearch();
  }

  onEditClient(id: number) {
    this.router.navigate(['editClient', id]);
  }

  onDeleteClient(c: Client) {
    const confirm = window.confirm('Etes vous sur de vouloir supprimer ce client ?');
    if (confirm === true) {
      this.clients.deleteClient(c.id)
        .subscribe(data => {
          this.pageClients.content.splice(this.pageClients.content.indexOf(c), 1);
        }, err => {
          console.log(err);
        });
    }

  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

}
