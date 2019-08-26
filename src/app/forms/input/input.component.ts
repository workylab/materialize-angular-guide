import { Component } from '@angular/core';

@Component({
  templateUrl: './input.component.html'
})
export class InputPageComponent {
  public autocomplete = 'none';
  public className = '';
  public disabled = false;
  public floatLabel = '';
  public hasCounter = false;
  public hasPrefix = false;
  public hasSuffix = false;
  public id = null;
  public maxLength = 500;
  public name = '';
  public placeholder = '';
  public required = false;
  public type = 'text';
  public value = '';

  onChangeDisabled(disabled: boolean) {
    this.disabled = disabled;
  }

  onChangeHasCounter(hasCounter: boolean) {
    this.hasCounter = hasCounter;
  }

  onChangeHasPrefix(hasPrefix: boolean) {
    this.hasPrefix = hasPrefix;
  }

  onChangeHasSuffix(hasSuffix: boolean) {
    this.hasSuffix = hasSuffix;
  }

  onChangeFloatLabel(floatLabel: string) {
    this.floatLabel = floatLabel;
  }

  onChangePlaceholder(placeholder: string) {
    this.placeholder = placeholder;
  }

  onChangeValue(value: string) {
    this.value = value;
  }

  onChangeType(typePassword: boolean) {
    this.type = typePassword ? 'password' : 'text';
  }
}
