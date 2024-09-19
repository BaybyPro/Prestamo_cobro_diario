import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tooltip, initTWE,Ripple } from 'tw-elements';
import { DisableRightClickService } from './services/disable-right-click.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'frontend';

  constructor(private disableClick: DisableRightClickService){

  }
  ngOnInit(): void {

  }
}
