import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FentonComponent } from './fenton.component';

describe('FentonComponent', () => {
  let component: FentonComponent;
  let fixture: ComponentFixture<FentonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FentonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FentonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
