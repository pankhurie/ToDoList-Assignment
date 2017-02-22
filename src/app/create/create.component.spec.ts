
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {RouterOutletMap} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common'
import {HttpModule} from '@angular/http';
import {CreateComponent} from "./create.component";
import {RouterTestingModule} from "@angular/router/testing";
import {AppService} from "../app.service";

describe('CreateComponent should', function () {
    let de: DebugElement;
    let comp: CreateComponent;
    let fixture: ComponentFixture<CreateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({

            declarations: [ CreateComponent],
            providers: [RouterOutletMap, AppService ],
            imports: [RouterTestingModule,BrowserModule, FormsModule, CommonModule, HttpModule],

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CreateComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create component', () => expect(comp).toBeDefined() );

});