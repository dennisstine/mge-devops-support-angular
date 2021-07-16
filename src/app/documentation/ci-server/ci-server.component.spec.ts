import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiServerComponent } from './ci-server.component';

describe('CiServerComponent', () => {
  let component: CiServerComponent;
  let fixture: ComponentFixture<CiServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
