import {Component, ViewEncapsulation} from '@angular/core';
import {UserCardComponent} from './user-card.component';
import {RealMugComponent} from './children/real-mug.component';

@Component({
    selector: 'style-app',
    directives: [UserCardComponent, RealMugComponent],
    template: `
        <user-card></user-card>
    `,
    encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {}