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
    tasks:Task[];
    constructor(private router: Router, private service: AppService) {}
    ngOnInit() {
        this.tasks = this.service.tasks;
    }
    edit(i:number){
        // alert("Attempt to edit index: "+i)
        // let index = this.service.tasks.indexOf(this.tasks[i]);
        this.router.navigate(['edit',i])
    }
    done(i:any){
        // alert("Attempt to delete index: "+i)
        // this.service.tasks.splice(i, 1);
        this.service.delete(i);
    }
}
