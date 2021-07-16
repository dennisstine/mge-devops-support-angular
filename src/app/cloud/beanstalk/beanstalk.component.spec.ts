import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeanstalkComponent } from './beanstalk.component';

describe('BeanstalkComponent', () => {
  let component: BeanstalkComponent;
  let fixture: ComponentFixture<BeanstalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeanstalkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeanstalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
