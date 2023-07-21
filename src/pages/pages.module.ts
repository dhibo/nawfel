import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SolarEnergyComponent } from './solar-energy/solar-energy.component';
import { HeatPumpsComponent } from './heat-pumps/heat-pumps.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeatRecoveryComponent } from './heat-recovery/heat-recovery.component';
import { ConsultingProjectsComponent } from './consulting-projects/consulting-projects.component';
import { HomeComponent } from './home/home.component';
import { EnergyEfficiencyComponent } from './energy-efficiency/energy-efficiency.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { AddProjectComponent } from './add-project/add-project.component';
import { RouterModule } from '@angular/router';
import { OwlModule } from 'ngx-owl-carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { BuildingHvacComponent } from './building-hvac/building-hvac.component';
import { EnergyComponent } from './energy/energy.component';
import { ProductsComponent } from './products/products.component';
@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    SolarEnergyComponent,
    HeatPumpsComponent,
    ProjectsComponent,
    HeatRecoveryComponent,
    ConsultingProjectsComponent,
    HomeComponent,
    EnergyEfficiencyComponent,
    LoginComponent,
    AddProjectComponent,
    BuildingHvacComponent,
    EnergyComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    TranslateModule,
    RouterModule,
    OwlModule,
    ReactiveFormsModule
    
  ]
})
export class PagesModule { }
