import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeFormat } from './anime-format';

describe('AnimeFormat', () => {
  let component: AnimeFormat;
  let fixture: ComponentFixture<AnimeFormat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeFormat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeFormat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
