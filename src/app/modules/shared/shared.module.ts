import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { LoaderComponent } from "src/app/layout/loader/loader.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    LoaderComponent
  ]
})
export class SharedModule {}
