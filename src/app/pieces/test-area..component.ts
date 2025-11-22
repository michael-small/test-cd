import { AfterContentInit, Component, ContentChild, ElementRef, inject, Injectable, ViewChild } from '@angular/core';
import { TestAreaService } from './test-area-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-test-area',
  template: `
    <button (click)="toggleTestArea(clicks, perClickDelay)">Show test area</button>
    <p>{{clicks}} clicks with {{perClickDelay}} ms delay</p>

    @if (showTestArea$ | async) {
      <p id="content">
        <ng-content />
      </p>
      <button #testButton (click)="btnFn()">Button</button>
    }
  `,
  imports: [AsyncPipe],
  styles: `
    #content {
      word-wrap: break-word;
      max-width: 800px;
    }
  `,
})
export class TestArea implements AfterContentInit {
  testAreaService = inject(TestAreaService);

  @ViewChild('testButton') btn: ElementRef | undefined;
  @ContentChild('txt') txt: ElementRef | undefined;

  showTestArea$ = this.testAreaService.showTestArea$

  clicks = 500
  perClickDelay = 250

  toggleTestArea(clicks: number, perClickDelay: number) {
    this.testAreaService.toggleShowTestArea();

    let count = 0;
    setTimeout(() => {
      const intervalId = setInterval(() => {
        count++;

        if (this.btn) {this.btn.nativeElement.click();}

        if (count >= clicks) {
          clearInterval(intervalId);
          this.testAreaService.toggleShowTestArea();
          console.log(`Done ${clicks} clicks`);
        }
      }, perClickDelay);
    }, 1000);
  }

  async ngAfterContentInit() {
    if (this.txt) {
      await navigator.clipboard.writeText(this.txt.nativeElement.textContent.split(':')[0]);
      console.log(this.txt.nativeElement.textContent.split(':')[0]);
    }
  }

  btnFn() {}
}
