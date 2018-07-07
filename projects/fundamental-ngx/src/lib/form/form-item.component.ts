import { Component, Input } from '@angular/core';

@Component({
    selector: 'fd-form-item',
    templateUrl: './form-item.component.html'
})
export class FormItemComponent {
    @Input() isCheck:   boolean = false;
    @Input() isInline:  boolean = false;
}