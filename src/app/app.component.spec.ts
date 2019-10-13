import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule, By } from '@angular/platform-browser';

import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let searchEl: DebugElement;
  let submitEl: DebugElement;
  let service: RestService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        NgxPaginationModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    searchEl = fixture.debugElement.query(By.css('input[type=text]'));
    submitEl = fixture.debugElement.query(By.css('span.fa-search'));

    service = TestBed.get(RestService);
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'GitHub-Search'`, () => {
    expect(component.title).toEqual('GitHub-Search');
  });

  // TODO check it will call search API when user press Enter
  xit('check it will call search API when user press Enter', () => {
    let search: any;
    searchEl.nativeElement.value = 'react';
    service.getGitHubs.bind((value) => search = value);
    submitEl.triggerEventHandler('click', null);
    // searchEl.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(service.getGitHubs).toHaveBeenCalled();
    });
  });

  // TODO check user can navigate through the list using pagination. Total 10 items per list.
  xit('check user can navigate through the list using pagination. Total 10 items per list', () => {
    // let search: any;
    // searchEl.nativeElement.value = 'react';
    // service.getGitHubs.bind((value) => search = value);
    // submitEl.triggerEventHandler('click', null);
    // // searchEl.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    // fixture.detectChanges();
    // fixture.whenStable().then(() => {
    //   expect(service.getGitHubs).toHaveBeenCalled();
    // });
  });

  // TODO check each item will have - Full name, description, language, total stars and update date
  xit('check each item will have - Full name, description, language, total stars and update date', () => {
    // let search: any;
    // searchEl.nativeElement.value = 'react';
    // service.getGitHubs.bind((value) => search = value);
    // submitEl.triggerEventHandler('click', null);
    // // searchEl.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    // fixture.detectChanges();
    // fixture.whenStable().then(() => {
    //   expect(service.getGitHubs).toHaveBeenCalled();
    // });
  });

  // TODO check if no result, notify user with appropriate message
  xit('check if no result, notify user with appropriate message', () => {
    // let search: any;
    // searchEl.nativeElement.value = 'react';
    // service.getGitHubs.bind((value) => search = value);
    // submitEl.triggerEventHandler('click', null);
    // // searchEl.nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    // fixture.detectChanges();
    // fixture.whenStable().then(() => {
    //   expect(service.getGitHubs).toHaveBeenCalled();
    // });
  });
});
