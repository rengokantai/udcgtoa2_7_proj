System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FPipe = (function () {
                function FPipe() {
                }
                FPipe.prototype.transform = function (value, args) {
                    if (value.length === 0) {
                        return value;
                    }
                    var res = [];
                    for (var _i = 0; _i < value.length; _i++) {
                        var item = value[_i];
                        if (item.name.match('^.*' + args[0] + '.*$')) {
                            res.push(item);
                        }
                    }
                    return res;
                };
                FPipe = __decorate([
                    core_1.Pipe({
                        name: 'mf'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FPipe);
                return FPipe;
            })();
            exports_1("FPipe", FPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbIkZQaXBlIiwiRlBpcGUuY29uc3RydWN0b3IiLCJGUGlwZS50cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFBQTtnQkFrQkFDLENBQUNBO2dCQVpHRCx5QkFBU0EsR0FBVEEsVUFBVUEsS0FBZ0JBLEVBQUNBLElBQWFBO29CQUNwQ0UsRUFBRUEsQ0FBQUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsS0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7d0JBQ2pCQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTtvQkFDakJBLENBQUNBO29CQUNEQSxJQUFJQSxHQUFHQSxHQUFDQSxFQUFFQSxDQUFDQTtvQkFDWEEsR0FBR0EsQ0FBQUEsQ0FBYUEsVUFBS0EsRUFBakJBLGlCQUFRQSxFQUFSQSxJQUFpQkEsQ0FBQ0E7d0JBQWxCQSxJQUFJQSxJQUFJQSxHQUFJQSxLQUFLQSxJQUFUQTt3QkFDUkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsR0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7NEJBQ3JDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTt3QkFDbkJBLENBQUNBO3FCQUNKQTtvQkFDREEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7Z0JBQ2ZBLENBQUNBO2dCQWpCTEY7b0JBQUNBLFdBQUlBLENBQUNBO3dCQUNGQSxJQUFJQSxFQUFDQSxJQUFJQTtxQkFDWkEsQ0FBQ0E7OzBCQWdCREE7Z0JBQURBLFlBQUNBO1lBQURBLENBbEJBLEFBa0JDQSxJQUFBO1lBbEJELHlCQWtCQyxDQUFBIiwiZmlsZSI6ImZpbHRlci5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGVybmFuIFkuS2Ugb24gMjAxNi8yLzIyLlxyXG4gKi9cclxuaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtsaXN0SXRlbX0gZnJvbSAnLi9pdGVtdHlwZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOidtZidcclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRlBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOmxpc3RJdGVtW10sYXJnczpzdHJpbmdbXSk6YW55e1xyXG4gICAgICAgIGlmKHZhbHVlLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXM9W107XHJcbiAgICAgICAgZm9yKGxldCBpdGVtIG9mIHZhbHVlKXtcclxuICAgICAgICAgICAgaWYoaXRlbS5uYW1lLm1hdGNoKCdeLionK2FyZ3NbMF0rJy4qJCcpKXtcclxuICAgICAgICAgICAgICAgIHJlcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
