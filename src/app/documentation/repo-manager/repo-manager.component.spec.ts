import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoManagerComponent } from './repo-manager.component';

describe('RepoManagerComponent', () => {
  let component: RepoManagerComponent;
  let fixture: ComponentFixture<RepoManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepoManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
