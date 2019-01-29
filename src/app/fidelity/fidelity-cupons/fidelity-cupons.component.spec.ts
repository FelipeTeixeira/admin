import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FidelityCuponsComponent } from './fidelity-cupons.component';

describe('FidelityCuponsComponent', () => {
  let component: FidelityCuponsComponent;
  let fixture: ComponentFixture<FidelityCuponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FidelityCuponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FidelityCuponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
