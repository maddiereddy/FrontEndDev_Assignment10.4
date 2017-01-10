import { Component } from '@angular/core';

@Component({
    selector: 'my-select',
    template: `
        <div class="details">
            <select class="selectpicker">
              <option>Mustard</option>
              <option>Ketchup</option>
              <option>Relish</option>
            </select>
        </div>`,
    styleUrls: ['./app.component.css']
})

export class MySelectComponent { }

