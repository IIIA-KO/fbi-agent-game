import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cookie-consent',
  imports: [CommonModule, RouterModule],
  templateUrl: './cookie-consent.component.html',
  styleUrl: './cookie-consent.component.css'
})
export class CookieConsentComponent {
  showConsent = false;

  ngOnInit() {
    const consent = localStorage.getItem('cookieConsent');
    const consentDate = localStorage.getItem('cookieConsentDate');

    if (!consent || (consentDate && Date.now() - parseInt(consentDate) > 31536000000)) {
      this.showConsent = true;
    }
  }

  acceptCookies() {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', Date.now().toString());
    this.showConsent = false;
  }

  declineCookies() {
    localStorage.setItem('cookieConsent', 'declined');
    localStorage.removeItem('cookieConsentDate');
    this.showConsent = false;
  }
}
