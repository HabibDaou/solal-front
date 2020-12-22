import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampModalComponent } from './champ-modal.component';

describe('ChampModalComponent', () => {
  let component: ChampModalComponent;
  let fixture: ComponentFixture<ChampModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
