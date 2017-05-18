import { NgModule } from '@angular/core';

import { UIRouterModule } from '@uirouter/angular';

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { HomeComponent } from './home';
import { AboutUsComponent } from './about-us';
import { ServicesComponent } from './services';
import { ContactComponent } from './contact';

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
        url: '/inicio',
        views: {
            'main@': { component: HomeComponent }
        }
    },
    {
        name: 'app.aboutUs',
        url: '/conocenos',
        views: {
            'main@': { component: AboutUsComponent }
        }
    },
    {
        name: 'app.services',
        url: '/servicios',
        views: {
            'main@': { component: ServicesComponent }
        }
    },
    {
        name: 'app.contact',
        url: '/contacto',
        views: {
            'main@': { component: ContactComponent }
        }
    }
];

@NgModule({
    imports: [
        UIRouterModule.forRoot({ states: states, otherwise: '/inicio', useHash: true })
    ],
    exports: [
        UIRouterModule
    ]
})
export class AppRoutingModule { }
