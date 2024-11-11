import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LandingComponent } from './sections/landing/landing.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ResumeComponent } from './sections/resume/resume.component';
import { ContactComponent } from './sections/contact/contact.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { NextComponent } from './sections/next/next.component';
import { AboutComponent } from './sections/about/about.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    LandingComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactComponent,
    NextComponent,
    MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My-Portfolio';



}
