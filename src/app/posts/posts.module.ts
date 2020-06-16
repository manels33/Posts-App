import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CreatePostComponent } from "./create-post/create-post.component";
import { ListPostsComponent } from "./list-posts/list-posts.component";
import { AngularMaterialModule } from "../angular-material.module";

@NgModule({
  declarations: [CreatePostComponent, ListPostsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class PostsModule {}
