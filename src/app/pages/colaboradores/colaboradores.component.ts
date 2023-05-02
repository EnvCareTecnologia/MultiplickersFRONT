import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})

export class ColaboradoresComponent implements OnInit{
  
  user: any = 'C';

  ELEMENT_DATA: any[] = [
    {position: 1, name: 'César Augusto', weight: 'Hackathon', symbol: 'H'},
    {position: 2, name: 'Heitor Henrique', weight: 'ArtPlic', symbol: 'He'},
    {position: 3, name: 'Fabrício da Silva', weight: 'Inova Osvaldo Cruz', symbol: 'Li'},
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
