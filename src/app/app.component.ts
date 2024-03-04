import { Component } from '@angular/core';
import { StClientLibService } from 'st-client-lib';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = 'statsig-app';

  constructor(private statsigService: StClientLibService) {}

  async statsigInit() {
    await this.statsigService.statsigInit('client-C1rOhOyc5O1TqQIpY3MCp5wCtjfxlXMsUvQSTnKqPi4');
  }

  getExperiment() {
    console.log(this.statsigService.getExperiment('image_search_aa_experiment'));
  }
}
