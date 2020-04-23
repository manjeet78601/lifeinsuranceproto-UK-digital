import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocateLabComponent } from './locate-lab.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

describe('LocateLabComponent', () => {
  let component: LocateLabComponent;
  let fixture: ComponentFixture<LocateLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateLabComponent ],
      imports: [IonicModule.forRoot(), RouterTestingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(LocateLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
