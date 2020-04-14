import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmailApptComponent } from './email-appt.component';

describe('EmailApptComponent', () => {
  let component: EmailApptComponent;
  let fixture: ComponentFixture<EmailApptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailApptComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmailApptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
