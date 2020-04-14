import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedicalExamPage } from './medical-exam.page';

describe('MedicalExamPage', () => {
  let component: MedicalExamPage;
  let fixture: ComponentFixture<MedicalExamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalExamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedicalExamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
