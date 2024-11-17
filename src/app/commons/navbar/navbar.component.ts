import { Component } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatRipple, MobileMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 70;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

}
