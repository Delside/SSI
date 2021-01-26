import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '../common/form';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FormSendService {

  constructor(private http: HttpClient) { }

  postForm(form: Form)
  {
    return this.http.post('http://localhost:3000/definitions', form);
  }

  get()
  {
    return this.http.get<Form[]>('http://localhost:3000/definitions').pipe(map(response => {
      return response;
    }));
  }

}

