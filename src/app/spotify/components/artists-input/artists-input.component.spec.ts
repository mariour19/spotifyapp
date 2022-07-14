import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsInputComponent } from './artists-input.component';

describe('ArtistsInputComponent', () => {
  let component: ArtistsInputComponent;
  let fixture: ComponentFixture<ArtistsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
