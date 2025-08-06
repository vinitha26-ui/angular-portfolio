import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMAILJS_CONFIG } from '../../config/emailjs.config';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.valid) {
      const templateParams = this.contactForm.value;

      emailjs.send(EMAILJS_CONFIG.serviceID, EMAILJS_CONFIG.templateID, templateParams, EMAILJS_CONFIG.publicKey)
        .then(() => {
          this.snackBar.open('Message sent successfully!', 'Close', {
            duration: 3000,
            panelClass: 'success-snackbar'
          });
          this.contactForm.reset();
          this.submitted = false;
        })
        .catch((error) => {
          this.snackBar.open('Failed to send. Try again.', 'Close', {
            duration: 3000,
            panelClass: 'error-snackbar'
          });
          console.error('EmailJS error:', error);
        });
    }
  }
}
