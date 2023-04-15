import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivosComponent } from './directivos.component';

describe('DirectivosComponent', () => {
  let component: DirectivosComponent;
  let fixture: ComponentFixture<DirectivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
