import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Form } from 'src/app/common/form';
import { FormSendService } from 'src/app/services/form-send.service';


@Component({
  selector: 'app-main-site',
  templateUrl: './main-site.component.html',
  styleUrls: ['./main-site.component.css']
})


export class MainSiteComponent implements OnInit {

  forms: Form[] = [];
  constructor(private formBuilder: FormBuilder,
    private formSendService:FormSendService,
    private router: Router) { }

  ngOnInit(): void {
    this.formSendService.get().subscribe(response => {
      console.log(response);
      this.forms = response['info'];
    }, error => {
      console.log(error);
    });
  }

}
