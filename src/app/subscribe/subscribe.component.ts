import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
})
export class SubscribeComponent {
    applyForm: FormGroup;
    popup: boolean = false;
    firstName!: string; // Marked as definitely assigned
    lastName!: string; // Marked as definitely assigned
    email!: string; // Marked as definitely assigned

    constructor(private fb: FormBuilder) {
        this.applyForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
        });
    }

    submitApplication() {
        if (this.applyForm.valid) {
            // Process subscription submission here
            // For example, send data to a backend API
            console.log('Subscription data:', this.applyForm.value);
            this.popup = true;
        }
    }
}