import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub-Search';

  config = {
    itemsPerPage: 10,
    currentPage: 1,
    totalItems: 0
  };
  collection = {
    status: '',
    message: '',
    total_count: 100,
    items: []
  };
  error: any;
  search = 'fly';

  constructor() {
    this.getGithubs({itemsPerPage: 10, currentPage: 1});
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

  getGithubs(config: any) {
    // Create dummy data
    for (let i = 0; i < this.collection.total_count; i++) {
      this.collection.items.push({
          html_url: '',
          full_name: 'facebook/react ' + i,
          description: 'A declarative, efficient and flexible Javascript library for building user interfaces.',
          updated_at: 'Tue Jul 03 2018',
          language: 'Javascript',
          stargazers_count: 105262
      });
    }
  }
}
