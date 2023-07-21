import { FrModule } from './fr.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnergyAuditsComponent } from 'src/components/energy-audits/energy-audits.component';
import { P1Component } from 'src/components/p1/p1.component';
import { P2Component } from 'src/components/p2/p2.component';
import { P3Component } from 'src/components/p3/p3.component';
import { P4Component } from 'src/components/p4/p4.component';

import { ProductComponent } from 'src/components/product/product.component';
import { TunkeyComponent } from 'src/components/tunkey/tunkey.component';
import { AboutComponent } from 'src/pages/about/about.component';
import { AddProjectComponent } from 'src/pages/add-project/add-project.component';
import { BuildingHvacComponent } from 'src/pages/building-hvac/building-hvac.component';
import { ConsultingProjectsComponent } from 'src/pages/consulting-projects/consulting-projects.component';
import { ContactComponent } from 'src/pages/contact/contact.component';
import { EnergyEfficiencyComponent } from 'src/pages/energy-efficiency/energy-efficiency.component';
import { EnergyComponent } from 'src/pages/energy/energy.component';
import { HeatPumpsComponent } from 'src/pages/heat-pumps/heat-pumps.component';
import { HeatRecoveryComponent } from 'src/pages/heat-recovery/heat-recovery.component';
import { HomeComponent } from 'src/pages/home/home.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { ProductsComponent } from 'src/pages/products/products.component';
import { ProjectsComponent } from 'src/pages/projects/projects.component';
import { SolarEnergyComponent } from 'src/pages/solar-energy/solar-energy.component';

const routes: Routes = [

  {path:'',component:HomeComponent,},
  {path:'projects',component:ProjectsComponent,},
  {path:'about',component:AboutComponent,},
  {path:'products',component:ProductsComponent,},
  {path:'p1',component:P1Component,},
  {path:'p2',component:P2Component,},
  {path:'p3',component:P3Component,},
  {path:'p4',component:P4Component,},


  {path:'RenewableAndGreenEnergies',
  children:[
    {path:'',component:EnergyComponent},
    {path:'HeatPumpsAndOtherSolutions',component:HeatPumpsComponent},
    {path:'SolorEnergy',component:SolarEnergyComponent},

  ]},
  {path:'ProjectsReferences',
   children:[
    {path:'',component:ProjectsComponent},
    {path:'HeatRecoveryAndEnergyEfficiency',
    children : [
      {path:'',component:HeatRecoveryComponent},
    ]
    },
    {path:'ConsultingProjects',
    children : [
      {path:'',component:ConsultingProjectsComponent},
      {path:'EnergyAuditsAndProcessIntegration',component:EnergyAuditsComponent},]
    },
    {path:'BuildingHvacAndPlumbingDesgin',component:BuildingHvacComponent}
  ]},
  {path:'EnergyEfficency',children:[
  {path:'',component:EnergyEfficiencyComponent},
  {path:'EngineeringService',component:EnergyEfficiencyComponent},
  {path:'ProductDesginAndManufacturing',component:ProductComponent},
  {path:'TurnkeyAndEpcProjects',component:TunkeyComponent},]}
  ,{
    path:'contact',component:ContactComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
