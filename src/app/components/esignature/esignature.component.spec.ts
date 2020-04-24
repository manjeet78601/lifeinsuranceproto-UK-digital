import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EsignatureComponent } from './esignature.component';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('EsignatureComponent', () => {
  let component: EsignatureComponent;
  let fixture: ComponentFixture<EsignatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsignatureComponent ],
      imports: [IonicModule.forRoot(),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EsignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
