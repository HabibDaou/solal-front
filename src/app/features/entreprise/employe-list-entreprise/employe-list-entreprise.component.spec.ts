import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeListEntrepriseComponent } from './employe-list-entreprise.component';

describe('EmployeListEntrepriseComponent', () => {
  let component: EmployeListEntrepriseComponent;
  let fixture: ComponentFixture<EmployeListEntrepriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeListEntrepriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeListEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
