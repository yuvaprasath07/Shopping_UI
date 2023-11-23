import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HederComponent } from './heder.component';

describe('HederComponent', () => {
  let component: HederComponent;
  let fixture: ComponentFixture<HederComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HederComponent]
    });
    fixture = TestBed.createComponent(HederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
