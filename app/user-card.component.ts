import {Component, ViewEncapsulation} from '@angular/core';
import {RealMugComponent} from './children/real-mug.component';

@Component({
    selector: 'user-card',
    directives: [RealMugComponent],
    styleUrls: ['app/user-card.component.css'],
    template: `
        <figure class="card">
            <img src="img/mug.jpeg" alt="Schwarty" class="mug">
            <figcaption class="name">
                Justin Schwartzenberger
            </figcaption>
        </figure>
    `,
    encapsulation: ViewEncapsulation.Emulated
})
export class UserCardComponent {
    hero;
    
    doSomething() {
        this.hero = 'treeman';
    }
}