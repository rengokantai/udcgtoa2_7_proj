System.register(['angular2/core', "./new.component", "./item.component", "./item.service", "../filter.pipe"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, new_component_1, item_component_1, item_service_1, filter_pipe_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (new_component_1_1) {
                new_component_1 = new_component_1_1;
            },
            function (item_component_1_1) {
                item_component_1 = item_component_1_1;
            },
            function (item_service_1_1) {
                item_service_1 = item_service_1_1;
            },
            function (filter_pipe_1_1) {
                filter_pipe_1 = filter_pipe_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(_iSer) {
                    this._iSer = _iSer;
                }
                //onAdd(item:listItem){
                //    this.listItems.push({name:item.name,amount:item.amount});
                //}
                ListComponent.prototype.onSelect = function (item) {
                    this.selectItem = item;
                };
                ListComponent.prototype.ngOnInit = function () {
                    this.listItems = this._iSer.getItems();
                };
                //onRemove(item:listItem){
                //    this.listItems.splice(this.listItems.indexOf(item),1);
                //    this.selectItem=null;
                //}
                ListComponent.prototype.onRemove = function () {
                    this.selectItem = null;
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'list',
                        template: "\n    <section>\n    <new-item ></new-item>\n    </section>\n    <section>\n    list\n    <input type=\"text\" #filter (keyup)=\"0\">\n    <div class=\"list\">\n    <ul><li *ngFor=\"#item of listItems|mf:filter.value\" (click)=\"onSelect(item)\">\n    {{item.name}}{{item.amount}}\n    </li></ul></div>\n    </section>\n    <section *ngIf=\"selectItem !=null\">\n    <items [item]=\"selectItem\" (removed)=\"onRemove()\">\n\n    </items></section>\n    ",
                        directives: [new_component_1.NewComponent, item_component_1.ItemComponent],
                        providers: [item_service_1.ItemService],
                        pipes: [filter_pipe_1.FPipe]
                    }), 
                    __metadata('design:paramtypes', [item_service_1.ItemService])
                ], ListComponent);
                return ListComponent;
            })();
            exports_1("ListComponent", ListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QvbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiTGlzdENvbXBvbmVudCIsIkxpc3RDb21wb25lbnQuY29uc3RydWN0b3IiLCJMaXN0Q29tcG9uZW50Lm9uU2VsZWN0IiwiTGlzdENvbXBvbmVudC5uZ09uSW5pdCIsIkxpc3RDb21wb25lbnQub25SZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVdBO2dCQTRCSUEsdUJBQW9CQSxLQUFpQkE7b0JBQWpCQyxVQUFLQSxHQUFMQSxLQUFLQSxDQUFZQTtnQkFBRUEsQ0FBQ0E7Z0JBQ3hDRCx1QkFBdUJBO2dCQUN2QkEsK0RBQStEQTtnQkFDL0RBLEdBQUdBO2dCQUNIQSxnQ0FBUUEsR0FBUkEsVUFBU0EsSUFBYUE7b0JBQ2xCRSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFDQSxJQUFJQSxDQUFDQTtnQkFDekJBLENBQUNBO2dCQUVERixnQ0FBUUEsR0FBUkE7b0JBQ0lHLElBQUlBLENBQUNBLFNBQVNBLEdBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBO2dCQUN6Q0EsQ0FBQ0E7Z0JBQ0RILDBCQUEwQkE7Z0JBQzFCQSw0REFBNERBO2dCQUM1REEsMkJBQTJCQTtnQkFDM0JBLEdBQUdBO2dCQUVIQSxnQ0FBUUEsR0FBUkE7b0JBQ0lJLElBQUlBLENBQUNBLFVBQVVBLEdBQUNBLElBQUlBLENBQUNBO2dCQUN6QkEsQ0FBQ0E7Z0JBOUNMSjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFDQSxNQUFNQTt3QkFDZkEsUUFBUUEsRUFBQ0EsdWNBZ0JSQTt3QkFDREEsVUFBVUEsRUFBQ0EsQ0FBQ0EsNEJBQVlBLEVBQUNBLDhCQUFhQSxDQUFDQTt3QkFDdkNBLFNBQVNBLEVBQUNBLENBQUNBLDBCQUFXQSxDQUFDQTt3QkFDdkJBLEtBQUtBLEVBQUNBLENBQUNBLG1CQUFLQSxDQUFDQTtxQkFDaEJBLENBQUNBOztrQ0F5QkRBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0EvQ0EsQUErQ0NBLElBQUE7WUEvQ0QseUNBK0NDLENBQUEiLCJmaWxlIjoibGlzdC9saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhlcm5hbiBZLktlIG9uIDIwMTYvMi8xOS5cclxuICovXHJcbmltcG9ydCB7Q29tcG9uZW50LE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TmV3Q29tcG9uZW50fSBmcm9tIFwiLi9uZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7bGlzdEl0ZW19IGZyb20gXCIuLi9pdGVtdHlwZVwiO1xyXG5pbXBvcnQge0l0ZW1Db21wb25lbnR9IGZyb20gXCIuL2l0ZW0uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7SXRlbVNlcnZpY2V9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xyXG5pbXBvcnQge0ZQaXBlfSBmcm9tIFwiLi4vZmlsdGVyLnBpcGVcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOidsaXN0JyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxzZWN0aW9uPlxyXG4gICAgPG5ldy1pdGVtID48L25ldy1pdGVtPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICBsaXN0XHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjZmlsdGVyIChrZXl1cCk9XCIwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxyXG4gICAgPHVsPjxsaSAqbmdGb3I9XCIjaXRlbSBvZiBsaXN0SXRlbXN8bWY6ZmlsdGVyLnZhbHVlXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGl0ZW0pXCI+XHJcbiAgICB7e2l0ZW0ubmFtZX19e3tpdGVtLmFtb3VudH19XHJcbiAgICA8L2xpPjwvdWw+PC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbiAqbmdJZj1cInNlbGVjdEl0ZW0gIT1udWxsXCI+XHJcbiAgICA8aXRlbXMgW2l0ZW1dPVwic2VsZWN0SXRlbVwiIChyZW1vdmVkKT1cIm9uUmVtb3ZlKClcIj5cclxuXHJcbiAgICA8L2l0ZW1zPjwvc2VjdGlvbj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOltOZXdDb21wb25lbnQsSXRlbUNvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6W0l0ZW1TZXJ2aWNlXSxcclxuICAgIHBpcGVzOltGUGlwZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAvLyBsaXN0SXRlbXMgPSBuZXcgQXJyYXk8bGlzdEl0ZW0+KCk7XHJcbiAgICBsaXN0SXRlbXM6QXJyYXk8bGlzdEl0ZW0+O1xyXG4gICAgc2VsZWN0SXRlbTogbGlzdEl0ZW07XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pU2VyOkl0ZW1TZXJ2aWNlKXt9XHJcbiAgICAvL29uQWRkKGl0ZW06bGlzdEl0ZW0pe1xyXG4gICAgLy8gICAgdGhpcy5saXN0SXRlbXMucHVzaCh7bmFtZTppdGVtLm5hbWUsYW1vdW50Oml0ZW0uYW1vdW50fSk7XHJcbiAgICAvL31cclxuICAgIG9uU2VsZWN0KGl0ZW06bGlzdEl0ZW0pe1xyXG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbT1pdGVtO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6YW55e1xyXG4gICAgICAgIHRoaXMubGlzdEl0ZW1zPXRoaXMuX2lTZXIuZ2V0SXRlbXMoKTtcclxuICAgIH1cclxuICAgIC8vb25SZW1vdmUoaXRlbTpsaXN0SXRlbSl7XHJcbiAgICAvLyAgICB0aGlzLmxpc3RJdGVtcy5zcGxpY2UodGhpcy5saXN0SXRlbXMuaW5kZXhPZihpdGVtKSwxKTtcclxuICAgIC8vICAgIHRoaXMuc2VsZWN0SXRlbT1udWxsO1xyXG4gICAgLy99XHJcblxyXG4gICAgb25SZW1vdmUoKXtcclxuICAgICAgICB0aGlzLnNlbGVjdEl0ZW09bnVsbDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
