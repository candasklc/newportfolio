import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge-home',
  templateUrl: './knowledge-home.component.html',
  styleUrls: ['./knowledge-home.component.scss']
})
export class KnowledgeHomeComponent implements OnInit {
  dummyData = [
    {
      title: 'Title',
      description: 'Some description here.'
    },
    {
      title: 'Title',
      description: 'Some description here.'
    },
    {
      title: 'Title',
      description: 'Some description here.'
    },
    {
      title: 'Title',
      description: 'Some description here.'
    },
    {
      title: 'Title',
      description: 'Some description here.'
    },
    {
      title: 'Title',
      description: 'Some description here.'
    },
    {
      title: 'Title',
      description: 'Some description here.'
    },
    {
      title: 'Title',
      description: 'Some description here.'
    },
    {
      title: 'Title',
      description: 'Some description here.'
    },
    {
      title: 'Title',
      description: 'Some description here.'
    },
    {
      title: 'Title',
      description: 'Some description here.'
    },
    {
      title: 'Title',
      description: 'Some description here.'
    },
    {
      title: 'Title',
      description: 'Some description here.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
