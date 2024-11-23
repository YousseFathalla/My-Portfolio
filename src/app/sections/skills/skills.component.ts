import { NgFor, UpperCasePipe } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

@Component({
    selector: 'skills',
    imports: [NgFor, UpperCasePipe],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  @ViewChildren('progressBar') progressBars!: QueryList<ElementRef>;

  skills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 95 },
    { name: 'JAVASCRIPT', percentage: 85 },
    { name: 'BOOTSTRAP', percentage: 95 },
    { name: 'TYPESCRIPT', percentage: 90 },
    { name: 'SASS', percentage: 90 },
    { name: 'ANGULAR', percentage: 90 },
    { name: 'ANGULAR MATERIAL', percentage: 90 },
    { name: 'RXJS', percentage: 70 },
    { name: 'MATERIAL DESIGN', percentage: 100 },
    { name: 'GITHUB', percentage: 75 }
  ];

  languages = [
    { name: 'Arabic', level: 'native speaker', levelNumber: 5 },
    { name: 'English', level: 'B2', levelNumber: 3 },
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLElement;
            const percentage = progressBar.getAttribute('data-percentage');
            if (percentage) {
              progressBar.style.width = `${percentage}%`;
              observer.unobserve(progressBar); // Stop observing once animated
            }
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is in view
      }
    );

    this.progressBars.forEach((progressBar) => {
      observer.observe(progressBar.nativeElement);
    });

  }
}
