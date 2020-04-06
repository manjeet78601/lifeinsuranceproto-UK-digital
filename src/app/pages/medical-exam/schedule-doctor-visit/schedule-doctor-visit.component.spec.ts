import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScheduleDoctorVisitComponent } from './schedule-doctor-visit.component';

describe('ScheduleDoctorVisitComponent', () => {
  let component: ScheduleDoctorVisitComponent;
  let fixture: ComponentFixture<ScheduleDoctorVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleDoctorVisitComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScheduleDoctorVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
