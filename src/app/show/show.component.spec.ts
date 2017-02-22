
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterModule, Router, RouterOutletMap, ActivatedRoute} from '@angular/router';
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule, LocationStrategy} from '@angular/common'
import {routes} from "../app.routes";
import {HttpModule} from '@angular/http';
import {ShowComponent} from "./show.component";
import {RouterTestingModule} from "@angular/router/testing";
import {AppService} from "../app.service";

describe('ShowComponent should', function () {
    let de: DebugElement;
    let comp: ShowComponent;
    let fixture: ComponentFixture<ShowComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({

            declarations: [ ShowComponent],
            providers: [RouterOutletMap, AppService ],
            imports: [RouterTestingModule,BrowserModule, FormsModule, CommonModule, HttpModule],

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShowComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create component', () => expect(comp).toBeDefined() );

});