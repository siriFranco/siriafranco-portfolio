import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxProjectsComponent } from './ux-projects.component';

describe('UxProjectsComponent', () => {
  let component: UxProjectsComponent;
  let fixture: ComponentFixture<UxProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UxProjectsComponent]
    });
    fixture = TestBed.createComponent(UxProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
