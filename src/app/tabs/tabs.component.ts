import { Component } from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

  tabs: { name: string, content: string }[] = [
    { name: 'Categories', content: 'Contenu pour les catégories...' },
    { name: 'Fauteuil', content: 'Contenu pour fauteuil...' },
    { name: 'Table', content: 'Contenu pour table...' },
    { name: 'Chaise', content: 'Contenu pour chaise...' },
    { name: 'Salle', content: 'Contenu pour salle...' }
  ];

  activeTab: string = 'Categories';

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  isActiveTab(tab: string): boolean {
    return tab === this.activeTab;
  }
}
