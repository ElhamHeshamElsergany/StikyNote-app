import { ParticlesConfig } from './../../particles-config';
import { Component, OnInit } from '@angular/core';

declare let particlesJS: any;
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});  }

}
