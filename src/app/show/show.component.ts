import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {Task} from "../task";
import {AppService} from "../app.service";

@Component({
    moduleId: module.id,
    selector: 'show',
    templateUrl: './show.component.html',
    styleUrls: ['']
})
export class ShowComponent implements OnInit{
    tasks:Task[] = [];
    constructor(private router: Router, private service: AppService) {}
    ngOnInit() {
        // this.tasks = this.service.tasks;

        this.refresh();

    }

    refresh(){
        /**
         * Observable
         */
        this.service.getData().subscribe((data:any) =>{
            // alert(JSON.stringify(data));
            this.tasks=data;
            // data.map((el:any)=>this.service.tasks.push(new Task(JSON.parse(el))))

        }, (err:any)=>{
            console.log(err)
        }, ()=>{
            console.log("Completed.")
        });
        /**
         * Promise
         */
        /*this.service.getDataWithPromise().then((data1:any) =>{
         alert("Success");
         }, (err:any)=>{
         alert("Something bad happened.")
         });*/
    }

    edit(i:number){
        // alert("Attempt to edit index: "+i)
        // let index = this.service.tasks.indexOf(this.tasks[i]);
        this.router.navigate(['edit',this.tasks[i]._id])
    }
    done(i:any){
        // alert("Attempt to delete index: "+i)
        // this.service.tasks.splice(i, 1);
        console.log("ID: "+this.tasks[i]._id);
        this.service.delete(this.tasks[i]._id);

        this.refresh();
    }
}
