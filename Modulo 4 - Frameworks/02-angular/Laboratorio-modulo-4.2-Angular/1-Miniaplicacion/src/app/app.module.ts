import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { AboutComponent } from "./pages/about/about.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderPublicComponent } from "./layout/header/header.component";
import { MenuPublicComponent } from "./layout/menu-public/menu-public.component";
import { MenuPrivateComponent } from "./layout/menu-private/menu-private.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { GalleryComponent } from "./pages/gallery/gallery.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { RotateDirective } from "./directives/rotate.directive";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    HeaderPublicComponent,
    MenuPublicComponent,
    MenuPrivateComponent,
    FooterComponent,
    DashboardComponent,
    GalleryComponent,
    ProfileComponent,
    RotateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
