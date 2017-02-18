import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {Task} from '../task'
import {AppService} from "../app.service";

@Component({
    selector: 'create',
    templateUrl: './app/create/create.component.html',
    styleUrls: ['']
})
export class CreateComponent  implements OnInit{
    task:Task=new Task("","","","");
    constructor(private router: Router, private service:AppService) {}
    ngOnInit(){

    }
    submit(){
        this.service.tasks.push(this.task);
        this.router.navigate(['show']);
        // alert(JSON.stringify(this.task));
    }

}
