/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TttComponent } from './ttt.component';

describe('TttComponent', () => {
  let component: TttComponent;
  let fixture: ComponentFixture<TttComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TttComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
