import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalNavbar } from './global-navbar';

describe('GlobalNavbar', () => {
  let component: GlobalNavbar;
  let fixture: ComponentFixture<GlobalNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
