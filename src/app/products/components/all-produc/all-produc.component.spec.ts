import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProducComponent } from './all-produc.component';

describe('AllProducComponent', () => {
  let component: AllProducComponent;
  let fixture: ComponentFixture<AllProducComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllProducComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
