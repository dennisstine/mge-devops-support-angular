import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicdToolsComponent } from './cicd-tools.component';

describe('ToolsComponent', () => {
  let component: CicdToolsComponent;
  let fixture: ComponentFixture<CicdToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicdToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CicdToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
