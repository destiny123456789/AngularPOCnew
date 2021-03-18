import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortUserComponent } from './sort-user.component';

describe('SortUserComponent', () => {
  let component: SortUserComponent;
  let fixture: ComponentFixture<SortUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
