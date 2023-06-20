import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form', { static: false }) addPropertyForm!: NgForm; // Add "!" for non-null assertion
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() { // Remove the parameter since you are accessing the form using ViewChild
    console.log('Congrats for Submitted!');
    console.log(this.addPropertyForm);
  }
}
