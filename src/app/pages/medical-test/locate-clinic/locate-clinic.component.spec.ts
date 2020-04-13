import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocateClinicComponent } from './locate-clinic.component';

describe('LocateClinicComponent', () => {
  let component: LocateClinicComponent;
  let fixture: ComponentFixture<LocateClinicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateClinicComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocateClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
