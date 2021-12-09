import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, public loginService: LoginService, public router: Router) { 
    this.form = this.fb.group({
      login: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  sendlogin(): void{
    let data = ''
    this.loginService.login(this.form.value.login, this.form.value.senha, data).then(response => {
      if(response !== null){
        this.router.navigate(['/guia-incidentes']);
      }else{
        Swal.fire('Dados incorretos', '', 'error').then(
          () => window.location.reload()
        );
      }
    })
  }

}
