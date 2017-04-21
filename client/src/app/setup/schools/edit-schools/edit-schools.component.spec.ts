import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchoolsComponent } from './edit-schools.component';

describe('EditSchoolsComponent', () => {
  let component: EditSchoolsComponent;
  let fixture: ComponentFixture<EditSchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
