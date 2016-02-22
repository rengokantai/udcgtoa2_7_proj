System.register(['angular2/core', './mocklist'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mocklist_1;
    var ItemService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mocklist_1_1) {
                mocklist_1 = mocklist_1_1;
            }],
        execute: function() {
            ItemService = (function () {
                function ItemService() {
                }
                ItemService.prototype.getItems = function () {
                    return mocklist_1.newlist;
                };
                ItemService.prototype.insertItem = function (item) {
                    mocklist_1.newlist.push(item);
                };
                ItemService.prototype.deleteItem = function (item) {
                    mocklist_1.newlist.splice(mocklist_1.newlist.indexOf(item), 1);
                };
                ItemService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ItemService);
                return ItemService;
            })();
            exports_1("ItemService", ItemService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QvaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbIkl0ZW1TZXJ2aWNlIiwiSXRlbVNlcnZpY2UuY29uc3RydWN0b3IiLCJJdGVtU2VydmljZS5nZXRJdGVtcyIsIkl0ZW1TZXJ2aWNlLmluc2VydEl0ZW0iLCJJdGVtU2VydmljZS5kZWxldGVJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTtnQkFBQUE7Z0JBWUFDLENBQUNBO2dCQVZHRCw4QkFBUUEsR0FBUkE7b0JBQ0lFLE1BQU1BLENBQUNBLGtCQUFPQSxDQUFDQTtnQkFDbkJBLENBQUNBO2dCQUNERixnQ0FBVUEsR0FBVkEsVUFBV0EsSUFBYUE7b0JBQ3BCRyxrQkFBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZCQSxDQUFDQTtnQkFFREgsZ0NBQVVBLEdBQVZBLFVBQVdBLElBQWFBO29CQUNwQkksa0JBQU9BLENBQUNBLE1BQU1BLENBQUNBLGtCQUFPQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFDQSxDQUFDQSxDQUFDQSxDQUFBQTtnQkFDM0NBLENBQUNBO2dCQVhMSjtvQkFBQ0EsaUJBQVVBLEVBQUVBOztnQ0FZWkE7Z0JBQURBLGtCQUFDQTtZQUFEQSxDQVpBLEFBWUNBLElBQUE7WUFaRCxxQ0FZQyxDQUFBIiwiZmlsZSI6Imxpc3QvaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGVybmFuIFkuS2Ugb24gMjAxNi8yLzIxLlxyXG4gKi9cclxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtsaXN0SXRlbX0gZnJvbSAnLi4vaXRlbXR5cGUnO1xyXG5pbXBvcnQge25ld2xpc3R9IGZyb20gJy4vbW9ja2xpc3QnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2V7XHJcbiAgICBnZXRJdGVtcygpe1xyXG4gICAgICAgIHJldHVybiBuZXdsaXN0O1xyXG4gICAgfVxyXG4gICAgaW5zZXJ0SXRlbShpdGVtOmxpc3RJdGVtKXtcclxuICAgICAgICBuZXdsaXN0LnB1c2goaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlSXRlbShpdGVtOmxpc3RJdGVtKXtcclxuICAgICAgICBuZXdsaXN0LnNwbGljZShuZXdsaXN0LmluZGV4T2YoaXRlbSksMSlcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
