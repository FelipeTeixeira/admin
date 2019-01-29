import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotePushComponent } from './promote-push.component';

describe('PromotePushComponent', () => {
  let component: PromotePushComponent;
  let fixture: ComponentFixture<PromotePushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotePushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotePushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
