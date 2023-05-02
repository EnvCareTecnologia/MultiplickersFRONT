import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})

export class ProjetosComponent {
  
  ELEMENT_DATA: any[] = [
    {position: 1, name: 'Hackathon', weight: '5/10', symbol: false},
    {position: 2, name: 'Ação Jovem', weight: '7/15', symbol: false},
    {position: 3, name: 'Inova Osvaldo Cruz', weight: '10/10', symbol: true},
  ];

  ELEMENT_DATA_2: any[] = [
    {position: 1, name: 'Aprendizado Tech', weight: '5/10', symbol: false},
    {position: 2, name: 'Escola da Nuvem', weight: '7/15', symbol: false},
    {position: 3, name: 'ArtPlic', weight: '10/10', symbol: true},
  ];
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;
  dataSource2 = this.ELEMENT_DATA_2;

  user: any = 'C';

  constructor(private activatedRoute: ActivatedRoute) {
    this.user = localStorage.getItem('user') ? localStorage.getItem('user') : 'C';
  }

  ngOnInit(){
    
  }

  previous(){

  }

  next(){

  }

  accessPage(index:any){

  }

}
