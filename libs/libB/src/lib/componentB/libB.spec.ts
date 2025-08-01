import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibB } from './libB';

describe('LibB', () => {
  let component: LibB;
  let fixture: ComponentFixture<LibB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibB],
    }).compileComponents();

    fixture = TestBed.createComponent(LibB);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
