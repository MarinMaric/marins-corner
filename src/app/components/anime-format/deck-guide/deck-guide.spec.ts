import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckGuide } from './deck-guide';

describe('DeckGuide', () => {
  let component: DeckGuide;
  let fixture: ComponentFixture<DeckGuide>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckGuide]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeckGuide);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
