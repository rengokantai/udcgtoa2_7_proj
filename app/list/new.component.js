System.register(['angular2/core', "./item.service", 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, item_service_1, common_1;
    var NewComponent;
    function cusvali(control) {
        if (control.value <= 0) {
            return { no: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (item_service_1_1) {
                item_service_1 = item_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            NewComponent = (function () {
                function NewComponent(_iS, _fBu) {
                    this._iS = _iS;
                    this._fBu = _fBu;
                    this.item = { name: '', amount: 0 };
                }
                NewComponent.prototype.onItemAdd = function () {
                    this._iS.insertItem({ name: this.item.name, amount: this.item.amount });
                };
                NewComponent.prototype.ngOnInit = function () {
                    this.mForm = this._fBu.group({
                        'name': ['', common_1.Validators.required],
                        'amount': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                cusvali
                            ])],
                    });
                };
                NewComponent = __decorate([
                    core_1.Component({
                        selector: 'new-item',
                        template: "\n    <form [ngFormModel]=\"mForm\" (ngSubmit)=\"onSubmit()\">\n        <label for=\"name\">name</label>\n    <input type=\"text\" id=\"name\" [(ngModel)]=\"item.name\" [ngFormControl]=\"mForm.controls['name']\">\n    <label for=\"amount\">amount</label>\n    <input type=\"text\" id=\"amount\" [(ngModel)]=\"item.amount\" [ngFormControl]=\"mForm.controls['amount']\">\n    <button (click)=\"onItemAdd()\" [disabled]=\"!mForm.valid\">add</button>\n    </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [item_service_1.ItemService, common_1.FormBuilder])
                ], NewComponent);
                return NewComponent;
            })();
            exports_1("NewComponent", NewComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QvbmV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJjdXN2YWxpIiwiTmV3Q29tcG9uZW50IiwiTmV3Q29tcG9uZW50LmNvbnN0cnVjdG9yIiwiTmV3Q29tcG9uZW50Lm9uSXRlbUFkZCIsIk5ld0NvbXBvbmVudC5uZ09uSW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBNENBLGlCQUFpQixPQUFlO1FBQzVCQSxFQUFFQSxDQUFBQSxDQUFDQSxPQUFPQSxDQUFDQSxLQUFLQSxJQUFFQSxDQUFDQSxDQUFDQSxDQUFBQSxDQUFDQTtZQUNqQkEsTUFBTUEsQ0FBQUEsRUFBQ0EsRUFBRUEsRUFBQ0EsSUFBSUEsRUFBQ0EsQ0FBQ0E7UUFDcEJBLENBQUNBO0lBQ0xBLENBQUNBOzs7Ozs7Ozs7Ozs7O1lBeENEO2dCQW1CSUMsc0JBQW9CQSxHQUFlQSxFQUFTQSxJQUFpQkE7b0JBQXpDQyxRQUFHQSxHQUFIQSxHQUFHQSxDQUFZQTtvQkFBU0EsU0FBSUEsR0FBSkEsSUFBSUEsQ0FBYUE7b0JBSjdEQSxTQUFJQSxHQUFDQSxFQUFDQSxJQUFJQSxFQUFDQSxFQUFFQSxFQUFDQSxNQUFNQSxFQUFDQSxDQUFDQSxFQUFDQSxDQUFDQTtnQkFJdUNBLENBQUNBO2dCQUNoRUQsZ0NBQVNBLEdBQVRBO29CQUNJRSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxVQUFVQSxDQUFDQSxFQUFDQSxJQUFJQSxFQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxFQUFDQSxNQUFNQSxFQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxFQUFDQSxDQUFDQSxDQUFDQTtnQkFDdkVBLENBQUNBO2dCQUVERiwrQkFBUUEsR0FBUkE7b0JBQ0lHLElBQUlBLENBQUNBLEtBQUtBLEdBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO3dCQUN2QkEsTUFBTUEsRUFBQ0EsQ0FBQ0EsRUFBRUEsRUFBQ0EsbUJBQVVBLENBQUNBLFFBQVFBLENBQUNBO3dCQUMvQkEsUUFBUUEsRUFBQ0EsQ0FBQ0EsRUFBRUEsRUFBQ0EsbUJBQVVBLENBQUNBLE9BQU9BLENBQUNBO2dDQUM1QkEsbUJBQVVBLENBQUNBLFFBQVFBO2dDQUNuQkEsT0FBT0E7NkJBQ1ZBLENBQUNBLENBQUNBO3FCQUNOQSxDQUFDQSxDQUFBQTtnQkFDTkEsQ0FBQ0E7Z0JBaENMSDtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUVQQSxRQUFRQSxFQUFDQSxVQUFVQTt3QkFDbkJBLFFBQVFBLEVBQUNBLG1kQVFSQTtxQkFDSkEsQ0FBQ0E7O2lDQXFCREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQWpDQSxBQWlDQ0EsSUFBQTtZQWpDRCx1Q0FpQ0MsQ0FBQSIsImZpbGUiOiJsaXN0L25ldy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBIZXJuYW4gWS5LZSBvbiAyMDE2LzIvMTkuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudCxFdmVudEVtaXR0ZXIsT25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtsaXN0SXRlbX0gZnJvbSBcIi4uL2l0ZW10eXBlXCI7XHJcbmltcG9ydCB7SXRlbVNlcnZpY2V9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbnRyb2xHcm91cCxGb3JtQnVpbGRlcixWYWxpZGF0b3JzLENvbnRyb2x9IGZyb20gJ2FuZ3VsYXIyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHJcbiAgICBzZWxlY3RvcjonbmV3LWl0ZW0nLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgPGZvcm0gW25nRm9ybU1vZGVsXT1cIm1Gb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cclxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPm5hbWU8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgWyhuZ01vZGVsKV09XCJpdGVtLm5hbWVcIiBbbmdGb3JtQ29udHJvbF09XCJtRm9ybS5jb250cm9sc1snbmFtZSddXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwiYW1vdW50XCI+YW1vdW50PC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYW1vdW50XCIgWyhuZ01vZGVsKV09XCJpdGVtLmFtb3VudFwiIFtuZ0Zvcm1Db250cm9sXT1cIm1Gb3JtLmNvbnRyb2xzWydhbW91bnQnXVwiPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib25JdGVtQWRkKClcIiBbZGlzYWJsZWRdPVwiIW1Gb3JtLnZhbGlkXCI+YWRkPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgaXRlbT17bmFtZTonJyxhbW91bnQ6MH07XHJcbiAgICAvL2l0ZW1hZGQ9bmV3IEV2ZW50RW1pdHRlcjxsaXN0SXRlbT4oKTtcclxuICAgIG1Gb3JtOkNvbnRyb2xHcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pUzpJdGVtU2VydmljZSxwcml2YXRlIF9mQnUgOkZvcm1CdWlsZGVyKXt9XHJcbiAgICBvbkl0ZW1BZGQoKXtcclxuICAgICAgICB0aGlzLl9pUy5pbnNlcnRJdGVtKHtuYW1lOnRoaXMuaXRlbS5uYW1lLGFtb3VudDp0aGlzLml0ZW0uYW1vdW50fSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTphbnl7XHJcbiAgICAgICAgdGhpcy5tRm9ybT10aGlzLl9mQnUuZ3JvdXAoe1xyXG4gICAgICAgICAgICAnbmFtZSc6WycnLFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICAnYW1vdW50JzpbJycsVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICBjdXN2YWxpXHJcbiAgICAgICAgICAgIF0pXSxcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY3VzdmFsaShjb250cm9sOkNvbnRyb2wpOntbczpzdHJpbmddOmJvb2xlYW59e1xyXG4gICAgaWYoY29udHJvbC52YWx1ZTw9MCl7XHJcbiAgICAgICAgcmV0dXJue25vOnRydWV9O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
