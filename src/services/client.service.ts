import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';
import {Client} from '../model/client.model';

@Injectable()
export class ClientService {

  constructor(public http:Http ) {

  }

  getClients(nom:String, ville:String, domaine:String,
  id_categorie:Number,page: Number, size: Number) {
    return this.http.get('http://localhost:8080/chercherClients?nom='
      + nom  + '&ville=' + ville+ '&domaine=' + domaine+ '&categorie=' + id_categorie
      + '&size=' + size + '&page=' + page)
      .pipe(map(resp => resp.json()));
  }

  saveContact(client: Client) {
    return this.http.post('http://localhost:8080/clients', client)
      .pipe(map(resp => resp.json()));
  }

  getContact(id: number) {
    return this.http.get('http://localhost:8080/clients/' + id )
      .pipe(map(resp => resp.json()));
  }

  updateContact(client: Client) {
    return this.http.put('http://localhost:8080/clients/' + client.id , client)
      .pipe(map(resp => resp.json()));
  }

  deleteClient (id: number) {
    return this.http.delete('http://localhost:8080/clients/' + id)
      .pipe(map(resp => resp.json()));
  }
}
