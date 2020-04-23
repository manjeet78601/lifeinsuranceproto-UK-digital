import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { HeadsupAccountComponent } from './headsup-account.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeadsupAccountComponent', () => {
  let component: HeadsupAccountComponent;
  let fixture: ComponentFixture<HeadsupAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadsupAccountComponent ],
      imports: [
        IonicModule.forRoot(),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HeadsupAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
