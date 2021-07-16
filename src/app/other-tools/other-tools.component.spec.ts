import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherToolsComponent } from './other-tools.component';

describe('ExternalComponent', () => {
  let component: OtherToolsComponent;
  let fixture: ComponentFixture<OtherToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
