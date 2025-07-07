
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  status: string;
  idStellantis: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  perimeter: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [TableModule, ButtonModule, InputTextModule, FormsModule],
  templateUrl: './user-list.component.html', // ← Utilisez le fichier HTML externe
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: User[] = [
    {
      id: 1,
      status: 'Active',
      idStellantis: 'ST123456',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@alten.com',
      role: 'Admin',
      perimeter: 'North Africa',
    },
    {
      id: 2,
      status: 'Inactive',
      idStellantis: 'ST654321',
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@alten.com',
      role: 'User',
      perimeter: 'Europe',
    },
  ];

  searchKeyword = '';

  filteredUsers(): User[] {
    if (!this.searchKeyword) return this.users;
    const keyword = this.searchKeyword.toLowerCase();
    return this.users.filter(user =>
      Object.values(user).some(value =>
        String(value).toLowerCase().includes(keyword)
      )
    );
  }

  clearSearch() {
    this.searchKeyword = '';
  }
}

