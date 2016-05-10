import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'real-mug',
    styleUrls: [`app/children/real-mug.component.css`],
    template: `<img src="img/realmug.jpeg" class="mug" alt="An actual mug">`,
    encapsulation: ViewEncapsulation.Emulated
})
export class RealMugComponent {}