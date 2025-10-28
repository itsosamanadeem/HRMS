import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appdashboard } from './appdashboard';

describe('Appdashboard', () => {
  let component: Appdashboard;
  let fixture: ComponentFixture<Appdashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appdashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appdashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
