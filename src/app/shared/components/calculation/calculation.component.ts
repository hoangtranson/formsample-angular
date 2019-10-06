import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {
  calculationForm: FormGroup;

  constructor(private fb: FormBuilder, private currencyPipe : CurrencyPipe) { }

  ngOnInit() {
    this.calculationForm = this.fb.group({
      ringgit: [''],
      dollar: [''],
    });
  }
}
