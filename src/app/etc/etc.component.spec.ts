import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtcComponent } from './etc.component';

describe('OtherComponent', () => {
  let component: EtcComponent;
  let fixture: ComponentFixture<EtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
