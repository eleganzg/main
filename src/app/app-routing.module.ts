import { NgModule } from '@angular/core';

import { UIRouterModule } from '@uirouter/angular';

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { HomeComponent } from './home';
import { AboutUsComponent } from './about-us';

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
