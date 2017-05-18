import { NgModule } from '@angular/core';

import { UIRouterModule, Transition } from '@uirouter/angular';

import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { HomeComponent } from './home';
import { AboutUsComponent } from './about-us';
import { ServicesComponent } from './services';
import { ContactComponent } from './contact';
import { LoginComponent } from './login';

export function loginResolve(trans) {
    return { error: trans.params().error, logout: trans.params().logout };
}

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
    },
    {
        name: 'app.login',
        url: '/login?error?logout',
        views: {
            'main@': { component: LoginComponent }
        },
        resolve: [
            {
                token: 'status',
                deps: [Transition],
                resolveFn: loginResolve
            }
        ]
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
