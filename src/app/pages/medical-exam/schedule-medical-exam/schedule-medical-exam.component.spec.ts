import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScheduleMedicalExamComponent } from './schedule-medical-exam.component';

describe('ScheduleMedicalExamComponent', () => {
  let component: ScheduleMedicalExamComponent;
  let fixture: ComponentFixture<ScheduleMedicalExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleMedicalExamComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleMedicalExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
