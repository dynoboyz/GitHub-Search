import { Component } from '@angular/core';
import { RestService } from '../app/rest.service';

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
    total_count: 0,
    items: []
  };
  error: any;
  search: string;

  constructor(public rest: RestService) { }

  pageChanged(event) {
    this.config.currentPage = event;
    this.getGithubs(this.config);
  }

  getGithubs(config: any) {
    this.rest.getGitHubs(config.currentPage, config.itemsPerPage, this.search).subscribe((data: {
      status, message, total_count, items
    }) => {
      this.error = '';
      this.collection = data;
      this.config.totalItems = this.collection.total_count;
    },
    error => {
      this.error = error.error;
    });
  }

  searchGitHub(search: string) {
    this.search = search;
    this.getGithubs(this.config);
  }
}
