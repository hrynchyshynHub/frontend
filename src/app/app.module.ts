import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LastReviewsComponent } from './last-reviews/last-reviews.component';
import { LastReviewsListComponent } from './last-reviews-list/last-reviews-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserPageUserInfoComponent } from './user-page-user-info/user-page-user-info.component';
import { MessageComponent } from './message/message.component';
import { FeedComponent } from './feed/feed.component';

const appRoutes: Routes = [
  { path: 'lastReviews', component: LastReviewsListComponent },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'feed', component : FeedComponent},
  { path: 'messages', component: MessageComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LastReviewsComponent,
    LastReviewsListComponent,
    PageNotFoundComponent,
    UserProfileComponent,
    NavbarComponent,
    UserPageUserInfoComponent,
    MessageComponent,
    FeedComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule.forRoot(), BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
