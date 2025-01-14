import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { HeaderComponent } from './home/components/header/header.component';
import { TodoButtonDeleteAllComponent } from './home/components/todo-button-delete-all/todo-button-delete-all.component';
import { TodoInputAddItensComponent } from './home/components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './home/components/todo-list/todo-list.component';

// Page
import { HomeComponent } from './home/pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent, TodoButtonDeleteAllComponent, TodoInputAddItensComponent, TodoListComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'toDoListAngular';
}
