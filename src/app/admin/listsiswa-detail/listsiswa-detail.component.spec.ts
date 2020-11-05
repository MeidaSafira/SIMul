import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsiswaDetailComponent } from './listsiswa-detail.component';

describe('ListsiswaDetailComponent', () => {
  let component: ListsiswaDetailComponent;
  let fixture: ComponentFixture<ListsiswaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsiswaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsiswaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
