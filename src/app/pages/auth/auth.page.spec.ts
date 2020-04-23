import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { AuthPage } from './auth.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthPage', () => {
  let component: AuthPage;
  let fixture: ComponentFixture<AuthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthPage ],
      imports: [IonicModule.forRoot(),
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
