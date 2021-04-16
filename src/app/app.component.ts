import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'New Group', url: '/folder/Inbox', icon: 'people' },
    { title: 'Contacts', url: '/folder/Outbox', icon: 'person' },
    { title: 'Calls', url: '/folder/Favorites', icon: 'pin' },
    { title: 'People Nearby', url: '/folder/Archived', icon: 'map' },
    { title: 'Saved Message', url: '/folder/Trash', icon: 'bookmark' },
    { title: 'Settings', url: '/folder/Spam', icon: 'settings' },
  ];
  public labels = ['Invite Friends', 'Telegram FAQ'];
  constructor() {}
}
