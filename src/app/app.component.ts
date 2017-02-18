import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
})

export class AppComponent implements OnInit{


    constructor(private service:AppService){

    }

    /**
     * method will be called automatically when component is initialised
     */
    ngOnInit(){
        // this.myinterns=this.service.interns;

    }
}


