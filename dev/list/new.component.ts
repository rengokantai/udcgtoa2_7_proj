/**
 * Created by Hernan Y.Ke on 2016/2/19.
 */
import {Component,EventEmitter,OnInit} from 'angular2/core';
import {listItem} from "../itemtype";
import {ItemService} from "./item.service";
import {ControlGroup,FormBuilder,Validators,Control} from 'angular2/common';

@Component({

    selector:'new-item',
    template:`
    <form [ngFormModel]="mForm" (ngSubmit)="onSubmit()">
        <label for="name">name</label>
    <input type="text" id="name" [(ngModel)]="item.name" [ngFormControl]="mForm.controls['name']">
    <label for="amount">amount</label>
    <input type="text" id="amount" [(ngModel)]="item.amount" [ngFormControl]="mForm.controls['amount']">
    <button (click)="onItemAdd()" [disabled]="!mForm.valid">add</button>
    </form>
    `
})

export class NewComponent implements OnInit{
    item={name:'',amount:0};
    //itemadd=new EventEmitter<listItem>();
    mForm:ControlGroup;

    constructor(private _iS:ItemService,private _fBu :FormBuilder){}
    onItemAdd(){
        this._iS.insertItem({name:this.item.name,amount:this.item.amount});
    }

    ngOnInit():any{
        this.mForm=this._fBu.group({
            'name':['',Validators.required],
            'amount':['',Validators.compose([
                Validators.required,
                cusvali
            ])],
        })
    }
}


function cusvali(control:Control):{[s:string]:boolean}{
    if(control.value<=0){
        return{no:true};
    }
}