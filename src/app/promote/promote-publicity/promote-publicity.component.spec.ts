import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotePublicityComponent } from './promote-publicity.component';

describe('PromotePublicityComponent', () => {
  let component: PromotePublicityComponent;
  let fixture: ComponentFixture<PromotePublicityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotePublicityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotePublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
