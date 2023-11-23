import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header-public',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderPublicComponent implements OnInit {
  logoUrl: string;

  constructor(public authService: AuthService) {
    this.logoUrl = 'assets/img/logo.svg';
  }

  ngOnInit(): void {}

}
