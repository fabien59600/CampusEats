import { Component } from '@angular/core';
import {CartManagerService} from '../cart-manager.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private cartService: CartManagerService,
    ) {}

}
