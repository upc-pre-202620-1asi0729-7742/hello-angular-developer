import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetDeveloper } from './greet-developer';

describe('GreetDeveloper', () => {
  let component: GreetDeveloper;
  let fixture: ComponentFixture<GreetDeveloper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetDeveloper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetDeveloper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
