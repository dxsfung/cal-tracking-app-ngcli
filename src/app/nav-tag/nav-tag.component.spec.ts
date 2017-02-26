/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavTagComponent } from './nav-tag.component';

describe('NavTagComponent', () => {
  let component: NavTagComponent;
  let fixture: ComponentFixture<NavTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
