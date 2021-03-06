import { HistorySessionsComponent } from './pages/history-sessions/history-sessions.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SessionComponent } from './pages/session/session.component';
import { HistoryRelationsComponent } from './pages/history-relations/history-relations.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'history-sessions', component: HistorySessionsComponent },
  { path: 'session', component: SessionComponent },
  { path: 'session/history', component: HistoryRelationsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
