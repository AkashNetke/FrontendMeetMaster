import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatmeetingComponent } from './creatmeeting.component';

describe('CreatmeetingComponent', () => {
  let component: CreatmeetingComponent;
  let fixture: ComponentFixture<CreatmeetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatmeetingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatmeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
