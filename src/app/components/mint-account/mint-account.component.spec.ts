import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { MintAccountComponent } from './mint-account.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MintAccountComponent', () => {
  let component: MintAccountComponent;
  let fixture: ComponentFixture<MintAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MintAccountComponent ],
      imports: [IonicModule.forRoot(),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MintAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
