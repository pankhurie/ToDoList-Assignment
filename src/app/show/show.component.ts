import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {Task} from "../task";
import {AppService} from "../app.service";

@Component({
    selector: 'show',
    templateUrl: './app/show/show.component.html',
    styleUrls: ['']
})
export class ShowComponent implements OnInit{
    tasks:Task[]
    constructor(private router: Router, private service: AppService) {}
    ngOnInit() {
        this.tasks = this.service.tasks;
    }

}
