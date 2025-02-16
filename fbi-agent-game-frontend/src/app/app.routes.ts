import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
  {path: '', redirectTo: '/game', pathMatch: 'full'},
  { path: 'game', component: GameComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
