import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncioAdminComponent } from './incio-admin.component';

describe('IncioAdminComponent', () => {
  let component: IncioAdminComponent;
  let fixture: ComponentFixture<IncioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncioAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
