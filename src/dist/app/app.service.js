"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var task_1 = require("./task");
var AppService = (function () {
    function AppService() {
        this.tasks = [{
                date: '1 jan',
                title: 'first title',
                description: 'first description',
                priority: 'high'
            }, {
                date: '2 jan',
                title: 'second title',
                description: 'second description',
                priority: 'medium'
            }, {
                date: '3 jan',
                title: '3 title',
                description: '3 description',
                priority: 'medium'
            }, {
                date: '4 jan',
                title: '4 title',
                description: '4 description',
                priority: 'medium'
            }, {
                date: '5 jan',
                title: '5 title',
                description: '5 description',
                priority: 'high'
            }];
    }
    AppService.prototype.add = function (date, title, description, priority) {
        this.tasks.push(new task_1.Task(date, title, description, priority));
    };
    AppService.prototype.delete = function (index) {
        this.tasks.splice(index, 1);
    };
    AppService.prototype.deleteSelected = function () {
        for (var i = (this.tasks.length - 1); i > -1; i--) {
            // if(this.tasks[i].completed) {
            this.tasks.splice(i, 1);
        }
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map