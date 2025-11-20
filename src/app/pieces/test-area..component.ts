import { AfterContentInit, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test-area',
  template: `
    <button (click)="toggleTestArea(1000, 250)">Show test area</button>

    @if (showTestArea) {
      <p>
        <ng-content />
      </p>
      <button #testButton (click)="btnFn()">Button</button>
    }
  `,
  styles: ``,
})
export class TestArea implements AfterContentInit {
  @ViewChild('testButton') btn: ElementRef | undefined;
  @ContentChild('txt') txt: ElementRef | undefined;

  showTestArea = false;

  toggleTestArea(clicks: number, perClickDelay: number) {
    this.showTestArea = !this.showTestArea;

    let count = 0;
    setTimeout(() => {
      const intervalId = setInterval(() => {
        count++;

        if (this.btn) {this.btn.nativeElement.click();}

        if (count >= clicks) {
          clearInterval(intervalId);
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
