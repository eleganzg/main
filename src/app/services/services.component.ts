import { Component } from '@angular/core';

import { SERVICES } from './services.constants';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent {
    public services = SERVICES;
}
