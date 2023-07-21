import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    HeaderComponent
  ],
})
export class SharedModule { }
