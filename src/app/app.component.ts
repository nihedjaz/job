import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importer Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
//   firstFormGroup: FormGroup;
//  secondFormGroup: FormGroup;
//  thirdFormGroup3: FormGroup;
 


  data = [
    { numeroCashpool: 123, nomGroupCashpool: 'Group A', typeNivellement: 'Directe', devise: 'MAD', numeroComptePivot: 456789, banque: 'Banque A', bic: 'BIC12345' },
    { numeroCashpool: 456, nomGroupCashpool: 'Group B', typeNivellement: 'Indirecte', devise: 'USD', numeroComptePivot: 987654, banque: 'Banque B', bic: 'BIC67890' },
    { numeroCashpool: 789, nomGroupCashpool: 'Group C', typeNivellement: 'Directe', devise: 'EUR', numeroComptePivot: 123456, banque: 'Banque C', bic: 'BIC11223' },
    { numeroCashpool: 1253, nomGroupCashpool: 'Group A', typeNivellement: 'Indirecte', devise: 'MAD', numeroComptePivot: 455546789, banque: 'Banque c', bic: 'BIC123121345' },
    { numeroCashpool: 445456, nomGroupCashpool: 'Group B', typeNivellement: 'Indirecte', devise: 'USD', numeroComptePivot: 987654, banque: 'Banque B', bic: 'BIC67890' },
    { numeroCashpool: 7155489, nomGroupCashpool: 'Group C', typeNivellement: 'Directe', devise: 'EUR', numeroComptePivot: 12543456, banque: 'Banque C', bic: 'BIC11223' },
    { numeroCashpool: 4454556, nomGroupCashpool: 'Group B', typeNivellement: 'Indirecte', devise: 'USD', numeroComptePivot: 9871654, banque: 'Banque B', bic: 'BIC67890' },
    { numeroCashpool: 715189, nomGroupCashpool: 'Group C', typeNivellement: 'Directe', devise: 'EUR', numeroComptePivot: 1254356, banque: 'Banque C', bic: 'BIC11223' },
    // Ajoutez plus de données ici si nécessaire
  ];
  // Listes pour les sélections
  devises = ['MAD', 'USD', 'EUR'];

  // Filtres
  filters = {
    numeroCashpool: null,
    nomGroupCashpool: '',
    typeNivellement: '',
    devise: '',
    numeroComptePivot: null,
    banque: '',
    bic: '',
  };

  constructor(private fb: FormBuilder,private router: Router) {
    // this.firstFormGroup = this.fb.group({
    //   groupName: ['', Validators.required],
    //   currency: ['', Validators.required],
    //   bankName: ['', Validators.required],
    //   rib: ['', Validators.required],
    //   bank: ['', Validators.required],
    //   bic: ['', Validators.required],
    //   addressLine1: ['', Validators.required],
    //   addressLine2: [''],
    //   addressLine3: [''],
    // });
    // this.secondFormGroup = this.fb.group({
    //   groupName: ['', Validators.required],
    //   currency: ['', Validators.required],
    //   bankName: ['', Validators.required],
    //   rib: ['', Validators.required],
    //   companyName: ['', Validators.required],
    //   addressLine1: ['', Validators.required],
    //   addressLine2: [''],
    //   addressLine3: [''],
    // });
    // this.thirdFormGroup3 = this.fb.group({
    //   percentage: [null, Validators.required]
    // });
  }
  pageSize = 5; // Nombre d'éléments par page
  currentPage = 1; // Page actuelle

  get totalPages() {
    return Math.ceil(this.filteredData.length / this.pageSize); // Calcul du nombre total de pages
  }

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredData.slice(startIndex, startIndex + this.pageSize);
  }

  // Méthodes pour naviguer entre les pages
  goToPage(page: number) {
    if (page < 1) {
      this.currentPage = 1;
    } else if (page > this.totalPages) {
      this.currentPage = this.totalPages;
    } else {
      this.currentPage = page;
    }
  }

  goToPrevious() {
    this.goToPage(this.currentPage - 1);
  }

  goToNext() {
    this.goToPage(this.currentPage + 1);
  }



// Données filtrées
filteredData = [...this.data];


applyFilters() {
  this.filteredData = this.data.filter(row => {
    return (
      (!this.filters.numeroCashpool || row.numeroCashpool.toString().includes(String(this.filters.numeroCashpool))) &&
      (!this.filters.nomGroupCashpool || row.nomGroupCashpool.toLowerCase().includes(this.filters.nomGroupCashpool.toLowerCase())) &&
      (!this.filters.typeNivellement || row.typeNivellement === this.filters.typeNivellement) &&
      (!this.filters.devise || row.devise === this.filters.devise) &&
      (!this.filters.numeroComptePivot || row.numeroComptePivot.toString().includes(String(this.filters.numeroComptePivot))) &&
      (!this.filters.banque || row.banque.toLowerCase().includes(this.filters.banque.toLowerCase())) &&
      (!this.filters.bic || row.bic.toLowerCase().includes(this.filters.bic.toLowerCase()))
    );
  });
}



// Réinitialiser les filtres
resetFilters() {
  this.filters = {
    numeroCashpool: null,
    nomGroupCashpool: '',
    typeNivellement: '',
    devise: '',
    numeroComptePivot: null,
    banque: '',
    bic: '',
  };
  this.applyFilters();
}
editRow(row: any) {
  console.log('Edit:', row);
  // Implémentez la logique pour éditer la ligne ici
}

viewRow(row: any) {
  console.log('View:', row);
  // Implémentez la logique pour visualiser la ligne ici
}

closeRow(row: any) {
  console.log('Close:', row);
  // Implémentez la logique pour clôturer la ligne ici
}
// navigateToCreateContract() {
//   // Redirige vers la page de création de contrat
//   this.router.navigate(['/create-contract']); // Remplacez '/create-contract' par le chemin de votre page de création
// }
}