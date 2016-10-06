import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Emploee } from './emploee'

@Injectable()
export class EmploeesService {
  apiUrl = 'https://nixcv.herokuapp.com/api/';
  emploee: Emploee;
  emploees: Emploee[];

  constructor(private http: Http) {

  }

  getEmploees() {
    return this.http.get(this.apiUrl)
      .map(response => {
        const data = response.json();
        return this.emploees = data;
      });
  }

  createEmploee(newEmploee) {
    const body = newEmploee;
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(this.apiUrl, body, headers)
      .map(response => {
        const data = response.json();
        this.emploees.push(data);
        return data;
      })
      .catch(error => Observable.throw(error.json()));
  }

  getEmploee(id) {
    return this.http.get(`${this.apiUrl}${id}`)
      .map(response => response.json().data)
      .catch(error => {
        return Observable.throw(error.json())
      });
  }

  deleteEmploee(emploee) {
    this.emploees.splice(this.emploees.indexOf(emploee), 1);
    return this.http.delete(this.apiUrl + emploee._id)
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  updateEmploee(emploee) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.put(this.apiUrl + emploee._id, emploee, headers)
      .map(response => response.json())
      .catch(error => Observable.throw(error.json()));
  }
}
