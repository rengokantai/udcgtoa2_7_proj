import {Component} from 'angular2/core';
import {ListComponent} from "./list/list.component";
//pass [myname] from parent component to child component.child component receive data from [input]
@Component({
    selector: 'my-app',
    template:`
    <header>
    <div class="brand">list</div>
    </header>
    <div class="main">
    <list></list></div>
    `,
    directives:[ListComponent]
})
export class AppComponent {

}