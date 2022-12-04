import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretListComponent } from './pret-list.component';

describe('PretListComponent', () => {
  let component: PretListComponent;
  let fixture: ComponentFixture<PretListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
