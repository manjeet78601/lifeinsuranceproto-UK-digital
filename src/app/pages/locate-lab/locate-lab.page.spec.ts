import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocateLabPage } from './locate-lab.page';

describe('LocateLabPage', () => {
  let component: LocateLabPage;
  let fixture: ComponentFixture<LocateLabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocateLabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocateLabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
