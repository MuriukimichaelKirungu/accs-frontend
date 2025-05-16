import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-give',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './give.component.html',
  styleUrls: ['./give.component.css']
})
export class GiveComponent {
  paymentPurpose: string = '';
  amount: number | null = null;
  phoneNumber: string = '';
  message: string = '';

  onSubmit(): void {
    if (!this.paymentPurpose || !this.amount || !this.phoneNumber) {
      this.message = 'Please fill in all required fields.';
      return;
    }

    this.message = `Request sent to pay KES ${this.amount} via M-Pesa for ${this.paymentPurpose}.`;
    // Payment logic to be added when backend is ready
  }
}
