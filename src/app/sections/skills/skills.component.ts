import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {


  skills = ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'SASS', 'TYPESCRIPT', 'ANGULAR', 'ANGULAR MATERIAL', 'MATERIAL DESIGN', 'GITHUB', 'RXJS']
}
