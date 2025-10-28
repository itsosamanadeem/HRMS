import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tile',
  imports: [FaIconComponent],
  templateUrl: './app-tile.html',
  styleUrl: './app-tile.css'
})
export class AppTile {
  @Input() icon!: IconDefinition;
  @Input() label: string = '';

  constructor(private router: Router) {}

  handleClick() {
    console.log(`Tile clicked: ${this.label}`);

    this.router.navigate([`/${this.label.toLowerCase()}`]);

  }

}
