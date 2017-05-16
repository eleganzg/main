import { TestBed, async } from '@angular/core/testing';

import { UIRouterModule } from '@uirouter/angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                UIRouterModule.forRoot({ useHash: true })
            ],
            declarations: [
                AppComponent,
                HeaderComponent,
                FooterComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    }));
});
