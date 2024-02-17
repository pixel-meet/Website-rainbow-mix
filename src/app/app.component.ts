import { DOCUMENT, NgForOf } from '@angular/common'
import { Component, Inject } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterModule, NgForOf],
  standalone: true,
})
export class AppComponent {
  title = 'rainbowMix'
  constructor() {}

  ngOnInit() {
  }

  ngDestory() {
  }
}
