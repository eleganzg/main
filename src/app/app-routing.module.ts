import { NgModule } from '@angular/core';

import { UIRouterModule } from "@uirouter/angular";

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

const states = [
    {
        name: 'app',
        abstract: true,
        views: {
            header: { component: HeaderComponent },
            footer: { component: FooterComponent }
        }
    },
    {
        name: 'app.home',
        url: '/home'
    }
];

@NgModule({
    imports: [
        UIRouterModule.forRoot({ states: states, otherwise: '/home', useHash: true })
    ],
    exports: [
        UIRouterModule
    ]
})
export class AppRoutingModule { }
