import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectorsComponent } from './sectors/sectors.component';
import { PartnersComponent } from './partners/partners.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { PhilosphyComponent } from './philosphy/philosphy.component';
import { EngineeringServicesComponent } from './engineering-services/engineering-services.component';
import { ProductComponent } from './product/product.component';
import { TunkeyComponent } from './tunkey/tunkey.component';
import { FoodComponent } from './food/food.component';
import { EnergyAuditsComponent } from './energy-audits/energy-audits.component';
import { SharedModule } from 'src/shared/shared.module';
import { TranslateModule, TranslateStore } from '@ngx-translate/core';
import { BackToTOPComponent } from './back-to-top/back-to-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ConsultingComponentsComponent } from './consulting-components/consulting-components.component';
import { HeatComponentComponent } from './heat-component/heat-component.component';
import { BuildingComponentComponent } from './building-component/building-component.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';
import { P3Component } from './p3/p3.component';
import { P4Component } from './p4/p4.component';
@NgModule({
  declarations: [
    SectorsComponent,
    PartnersComponent,
    WhoWeAreComponent,
    PhilosphyComponent,
    EngineeringServicesComponent,
    ProductComponent,
    TunkeyComponent,
    FoodComponent,
    EnergyAuditsComponent,
    BackToTOPComponent,
    ConsultingComponentsComponent,
    HeatComponentComponent,
    BuildingComponentComponent,
    P1Component,
    P2Component,
    P3Component,
    P4Component
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    SharedModule,
    TranslateModule,
    CarouselModule,
  ],
  exports: [
    SectorsComponent,
    PartnersComponent,
    WhoWeAreComponent,
    PhilosphyComponent,
    EngineeringServicesComponent,
    ProductComponent,
    TunkeyComponent,
    BackToTOPComponent,
    ConsultingComponentsComponent,
    HeatComponentComponent,
    BuildingComponentComponent
  ],

})
export class ComponentsModule { }
