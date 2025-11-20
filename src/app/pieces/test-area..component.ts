import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-area',
  template: `
    <button (click)="toggleTestArea(100, 100)">Show test area</button>
    
    @if (showTestArea) {
      <p>
        <ng-content />
      </p>
      <button (click)="btnFn()" #testButton>Button</button>
    }
  `,
  styles: ``,
})
export class TestArea {
  @ViewChild('testButton') btn: ElementRef | undefined;

  showTestArea = false;
  
  toggleTestArea(clicks: number, perClickDelay: number) {
    this.showTestArea = !this.showTestArea;

    let count = 0;
    setTimeout(() => {
      let intervalId = setInterval(() => {
        count++;

        if(this.btn) this.btn.nativeElement.click();

        if (count >= clicks) {
          clearInterval(intervalId);
          console.log(`Done ${clicks} clicks`);
        }
      }, perClickDelay);
    }, 1000);
  }

  btnFn() {}
}
