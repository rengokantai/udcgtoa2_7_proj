System.register(['angular2/core', "./list/list.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            }],
        execute: function() {
            //pass [myname] from parent component to child component.child component receive data from [input]
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <header>\n    <div class=\"brand\">list</div>\n    </header>\n    <div class=\"main\">\n    <list></list></div>\n    ",
                        directives: [list_component_1.ListComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiQXBwQ29tcG9uZW50IiwiQXBwQ29tcG9uZW50LmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQSxrR0FBa0c7WUFDbEc7Z0JBQUFBO2dCQWFBQyxDQUFDQTtnQkFiREQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBRUEsUUFBUUE7d0JBQ2xCQSxRQUFRQSxFQUFDQSw2SEFNUkE7d0JBQ0RBLFVBQVVBLEVBQUNBLENBQUNBLDhCQUFhQSxDQUFDQTtxQkFDN0JBLENBQUNBOztpQ0FHREE7Z0JBQURBLG1CQUFDQTtZQUFEQSxDQWJBLEFBYUNBLElBQUE7WUFiRCx1Q0FhQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TGlzdENvbXBvbmVudH0gZnJvbSBcIi4vbGlzdC9saXN0LmNvbXBvbmVudFwiO1xyXG4vL3Bhc3MgW215bmFtZV0gZnJvbSBwYXJlbnQgY29tcG9uZW50IHRvIGNoaWxkIGNvbXBvbmVudC5jaGlsZCBjb21wb25lbnQgcmVjZWl2ZSBkYXRhIGZyb20gW2lucHV0XVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgIDxoZWFkZXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYnJhbmRcIj5saXN0PC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XHJcbiAgICA8bGlzdD48L2xpc3Q+PC9kaXY+XHJcbiAgICBgLFxyXG4gICAgZGlyZWN0aXZlczpbTGlzdENvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
