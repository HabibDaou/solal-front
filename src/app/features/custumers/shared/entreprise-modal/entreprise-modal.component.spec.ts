import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseModalComponent } from './entreprise-modal.component';

describe('EntrepriseModalComponent', () => {
  let component: EntrepriseModalComponent;
  let fixture: ComponentFixture<EntrepriseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
