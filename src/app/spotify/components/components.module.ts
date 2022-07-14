import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArtistsInputComponent } from './artists-input/artists-input.component';


@NgModule({


declarations:[
ArtistsInputComponent
]
    ,

exports:[
ArtistsInputComponent


]
,  imports: [
    CommonModule,
    FormsModule,
     



  ]

})

export class ComponentsModule { }
