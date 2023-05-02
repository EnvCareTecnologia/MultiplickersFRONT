import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-solicitacoes',
  templateUrl: './solicitacoes.component.html',
  styleUrls: ['./solicitacoes.component.scss']
})

export class PesquisaLivroComponent implements OnInit{
  
  user: any = 'C';

  ELEMENT_DATA: any[] = [
    {position: 1, name: '10/04/2023', weight: 'Reclamação', symbol: 'H'},
    {position: 2, name: '15/03/2023', weight: 'Melhoria', symbol: 'He'},
    {position: 3, name: '08/02/2023', weight: 'Elogio', symbol: 'Li'},
  ];
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;

  constructor(private router: Router) {
    this.user = localStorage.getItem('user') ? localStorage.getItem('user') : 'C'; 
  }

  ngOnInit(){

  }

  loadData(filter: any){

  }

  previous(){
  }

  next(){

  }

  accessPage(index:any){

  }

}
