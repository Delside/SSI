import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormSendService } from 'src/app/services/form-send.service';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private formSendService:FormSendService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      term: ['', Validators.required],
      explication: ['', Validators.required],
      definition: ['', Validators.required],
      author: ['', Validators.required]
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.invalid)
    {
      console.log('ups');
    }
    else {
      this.formSendService.postForm(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          setTimeout(window.location.reload.bind(window.location), 2000)
          this.toastr.success("Udało się dodać definicję!")
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
