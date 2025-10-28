import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTile } from './app-tile';

describe('AppTile', () => {
  let component: AppTile;
  let fixture: ComponentFixture<AppTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
