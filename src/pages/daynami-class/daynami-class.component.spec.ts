import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaynamiClassComponent } from './daynami-class.component';

describe('DaynamiClassComponent', () => {
  let component: DaynamiClassComponent;
  let fixture: ComponentFixture<DaynamiClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaynamiClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaynamiClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
