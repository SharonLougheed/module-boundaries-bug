import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibA } from './LibA';

describe('LibA', () => {
  let component: LibA;
  let fixture: ComponentFixture<LibA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibA],
    }).compileComponents();

    fixture = TestBed.createComponent(LibA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
