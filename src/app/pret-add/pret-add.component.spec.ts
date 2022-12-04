import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretAddComponent } from './pret-add.component';

describe('PretAddComponent', () => {
  let component: PretAddComponent;
  let fixture: ComponentFixture<PretAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
