import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachProductDetailsComponent } from './each-product-details.component';

describe('EachProductDetailsComponent', () => {
  let component: EachProductDetailsComponent;
  let fixture: ComponentFixture<EachProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachProductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
