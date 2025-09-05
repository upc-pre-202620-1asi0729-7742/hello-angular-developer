import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDeveloper } from './register-developer';

describe('RegisterDeveloper', () => {
  let component: RegisterDeveloper;
  let fixture: ComponentFixture<RegisterDeveloper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterDeveloper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterDeveloper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
