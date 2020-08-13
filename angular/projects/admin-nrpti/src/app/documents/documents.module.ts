// modules
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DocumentAuthenticatedReadOnlyComponent } from './document-authenticated-read-only/document-authenticated-read-only.component';
import { S3SignedUrlAnchorComponent } from './s3-signed-url-anchor/s3-signed-url-anchor.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    DocumentAuthenticatedReadOnlyComponent,
    S3SignedUrlAnchorComponent
  ],
  exports: [DocumentAuthenticatedReadOnlyComponent]
})
export class DocumentsModule {}
