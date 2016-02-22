/**
 * Created by Hernan Y.Ke on 2016/2/19.
 */
import {Component,OnInit} from 'angular2/core';
import {NewComponent} from "./new.component";
import {listItem} from "../itemtype";
import {ItemComponent} from "./item.component";
import {ItemService} from "./item.service";
import {FPipe} from "../filter.pipe";


@Component({
    selector:'list',
    template:`
    <section>
    <new-item ></new-item>
    </section>
    <section>
    list
    <input type="text" #filter (keyup)="0">
    <div class="list">
    <ul><li *ngFor="#item of listItems|mf:filter.value" (click)="onSelect(item)">
    {{item.name}}{{item.amount}}
    </li></ul></div>
    </section>
    <section *ngIf="selectItem !=null">
    <items [item]="selectItem" (removed)="onRemove()">

    </items></section>
    `,
    directives:[NewComponent,ItemComponent],
    providers:[ItemService],
    pipes:[FPipe]
})

export class ListComponent implements OnInit{
   // listItems = new Array<listItem>();
    listItems:Array<listItem>;
    selectItem: listItem;
    constructor(private _iSer:ItemService){}
    //onAdd(item:listItem){
    //    this.listItems.push({name:item.name,amount:item.amount});
    //}
    onSelect(item:listItem){
        this.selectItem=item;
    }

    ngOnInit():any{
        this.listItems=this._iSer.getItems();
    }
    //onRemove(item:listItem){
    //    this.listItems.splice(this.listItems.indexOf(item),1);
    //    this.selectItem=null;
    //}

    onRemove(){
        this.selectItem=null;
    }
}