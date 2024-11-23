import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIcon } from '@angular/material/icon';
import emailjs from 'emailjs-com';

@Component({
  selector: 'contact',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatIcon],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private snackbar = inject(MatSnackBar)

  saveForm(saveForm: NgForm) {
    const formData = { ...saveForm.value };

    emailjs.init('80c4yfVCMkWmcZS8m');
    emailjs.send('service_ph7o97e', 'template_su0gilk', formData)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.snackbar.open("Email sent successfully!", "Close", { duration: 2500 })
        saveForm.resetForm();
      })
      .catch((error) => {
        console.error('FAILED...', error);
        this.snackbar.open("Failed to send email. Please try again.", "Close", { duration: 2500 })
      });
  }
}
