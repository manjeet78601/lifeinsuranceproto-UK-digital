import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UrgentCarePage } from './urgent-care.page';

describe('UrgentCarePage', () => {
  let component: UrgentCarePage;
  let fixture: ComponentFixture<UrgentCarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrgentCarePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UrgentCarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
