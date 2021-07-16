import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildPipelineComponent } from './build-pipeline.component';

describe('BuildPipelineComponent', () => {
  let component: BuildPipelineComponent;
  let fixture: ComponentFixture<BuildPipelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildPipelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildPipelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
