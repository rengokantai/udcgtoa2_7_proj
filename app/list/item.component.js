System.register(['angular2/core', "./item.service"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, item_service_1;
    var ItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (item_service_1_1) {
                item_service_1 = item_service_1_1;
            }],
        execute: function() {
            ItemComponent = (function () {
                function ItemComponent(_iS) {
                    this._iS = _iS;
                    this.item = { name: '', amount: 0 };
                    this.removed = new core_1.EventEmitter();
                }
                //removed=new EventEmitter<listItem>();
                ItemComponent.prototype.onItemDelete = function () {
                    this._iS.deleteItem(this.item);
                    this.removed.emit(null);
                };
                ItemComponent = __decorate([
                    core_1.Component({
                        selector: 'items',
                        template: "\n        <label for=\"name\">name</label>\n    <input type=\"text\" id=\"name\" [(ngModel)]=\"item.name\">\n    <label for=\"amount\">amount</label>\n    <input type=\"text\" id=\"amount\" [(ngModel)]=\"item.amount\">\n    <button (click)=\"onItemDelete()\">remove</button>\n    ",
                        inputs: ['item'],
                        outputs: ['removed']
                    }), 
                    __metadata('design:paramtypes', [item_service_1.ItemService])
                ], ItemComponent);
                return ItemComponent;
            })();
            exports_1("ItemComponent", ItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QvaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiSXRlbUNvbXBvbmVudCIsIkl0ZW1Db21wb25lbnQuY29uc3RydWN0b3IiLCJJdGVtQ29tcG9uZW50Lm9uSXRlbURlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUUE7Z0JBaUJJQSx1QkFBb0JBLEdBQWVBO29CQUFmQyxRQUFHQSxHQUFIQSxHQUFHQSxDQUFZQTtvQkFGbkNBLFNBQUlBLEdBQUdBLEVBQUNBLElBQUlBLEVBQUNBLEVBQUVBLEVBQUNBLE1BQU1BLEVBQUNBLENBQUNBLEVBQUNBLENBQUNBO29CQUMxQkEsWUFBT0EsR0FBR0EsSUFBSUEsbUJBQVlBLEVBQVlBLENBQUNBO2dCQUNGQSxDQUFDQTtnQkFDdENELHVDQUF1Q0E7Z0JBQ3ZDQSxvQ0FBWUEsR0FBWkE7b0JBQ0lFLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLFVBQVVBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO29CQUMvQkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQzVCQSxDQUFDQTtnQkF0QkxGO29CQUFDQSxnQkFBU0EsQ0FBQ0E7d0JBQ1BBLFFBQVFBLEVBQUNBLE9BQU9BO3dCQUNoQkEsUUFBUUEsRUFBQ0EsMFJBTVJBO3dCQUNEQSxNQUFNQSxFQUFDQSxDQUFDQSxNQUFNQSxDQUFDQTt3QkFDZkEsT0FBT0EsRUFBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0E7cUJBQ3RCQSxDQUFDQTs7a0NBYURBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0F4QkEsQUF3QkNBLElBQUE7WUF4QkQseUNBd0JDLENBQUEiLCJmaWxlIjoibGlzdC9pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhlcm5hbiBZLktlIG9uIDIwMTYvMi8xOS5cclxuICovXHJcbmltcG9ydCB7Q29tcG9uZW50LEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TmV3Q29tcG9uZW50fSBmcm9tIFwiLi9uZXcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7bGlzdEl0ZW19IGZyb20gXCIuLi9pdGVtdHlwZVwiO1xyXG5pbXBvcnQge0l0ZW1TZXJ2aWNlfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J2l0ZW1zJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPm5hbWU8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgWyhuZ01vZGVsKV09XCJpdGVtLm5hbWVcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJhbW91bnRcIj5hbW91bnQ8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhbW91bnRcIiBbKG5nTW9kZWwpXT1cIml0ZW0uYW1vdW50XCI+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkl0ZW1EZWxldGUoKVwiPnJlbW92ZTwvYnV0dG9uPlxyXG4gICAgYCxcclxuICAgIGlucHV0czpbJ2l0ZW0nXSxcclxuICAgIG91dHB1dHM6WydyZW1vdmVkJ11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgSXRlbUNvbXBvbmVudHtcclxuICAgIGl0ZW0gPSB7bmFtZTonJyxhbW91bnQ6MH07XHJcbiAgICByZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxsaXN0SXRlbT4oKTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2lTOkl0ZW1TZXJ2aWNlKXt9XHJcbiAgICAvL3JlbW92ZWQ9bmV3IEV2ZW50RW1pdHRlcjxsaXN0SXRlbT4oKTtcclxuICAgIG9uSXRlbURlbGV0ZSgpe1xyXG4gICAgICAgIHRoaXMuX2lTLmRlbGV0ZUl0ZW0odGhpcy5pdGVtKTtcclxuICAgICAgICB0aGlzLnJlbW92ZWQuZW1pdChudWxsKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
