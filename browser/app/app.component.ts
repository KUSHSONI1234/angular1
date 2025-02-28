import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HomeMainComponent } from './components/home-main/home-main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from "./components/home/home.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Brihspati - The CyberForensic Tool';
}
