import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FacialIdentityPage } from './facial-identity.page';

describe('FacialIdentityPage', () => {
  let component: FacialIdentityPage;
  let fixture: ComponentFixture<FacialIdentityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacialIdentityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FacialIdentityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
