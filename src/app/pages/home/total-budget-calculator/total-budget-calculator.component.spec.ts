import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TotalBudgetCalculatorComponent } from './total-budget-calculator.component';

describe('TotalBudgetCalculatorComponent', () => {
  let component: TotalBudgetCalculatorComponent;
  let fixture: ComponentFixture<TotalBudgetCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalBudgetCalculatorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TotalBudgetCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
