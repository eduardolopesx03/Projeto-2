import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // RouterOutlet para gerenciar as rotas
import { HomeComponent } from './pages/home/home.component';  // Páginas
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component'; //Navbar
import { FooterComponent } from './sharepage/footer/footer.component'; //Footer


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,    // Para gerenciar rotas
    HomeComponent,   // Componentes de páginas
    MenuComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent, // Componentes Navbar e Footer
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrigido para "styleUrls" no plural
})
export class AppComponent {
  title = 'web';
}
