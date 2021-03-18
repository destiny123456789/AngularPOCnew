import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortUserjoindateComponent } from './sort-userjoindate.component';

describe('SortUserjoindateComponent', () => {
  let component: SortUserjoindateComponent;
  let fixture: ComponentFixture<SortUserjoindateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortUserjoindateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortUserjoindateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
