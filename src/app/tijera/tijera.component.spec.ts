import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TijeraComponent } from './tijera.component';

describe('TijeraComponent', () => {
  let component: TijeraComponent;
  let fixture: ComponentFixture<TijeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TijeraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TijeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
