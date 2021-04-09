import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LabTest2';

  debug(msg: string, variable: any): void {
    console.log(`${msg} ${variable}`);
  }
}
