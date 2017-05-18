import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { LOGIN_VALIDATION } from './login-validation.constant';

@Component({
    moduleId: module.id + '',
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    @Input('status') status;

    public validation = LOGIN_VALIDATION;
    public hasLoggedOut = false;
    public hasError = false;
    public user: string;
    public pass: string;
}
