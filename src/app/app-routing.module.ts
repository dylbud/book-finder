import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookListComponent } from "./book-list/book-list.component";
import { MemoryGridComponent } from "./memory-grid/memory-grid.component";

const routes: Routes = [
  { path: "book-list", component: BookListComponent },
  { path: "memory-grid", component: MemoryGridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
