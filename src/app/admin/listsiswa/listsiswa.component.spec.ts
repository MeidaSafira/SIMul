import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsiswaComponent } from './listsiswa.component';

describe('ListsiswaComponent', () => {
  let component: ListsiswaComponent;
  let fixture: ComponentFixture<ListsiswaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsiswaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsiswaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
