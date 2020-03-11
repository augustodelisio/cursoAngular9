import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TablaDataSource } from './tabla-datasource';
import { PlaceholderService } from '../services/placeholder.service';
import { Usuario } from '../models/user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Usuario>;
  dataSource: TablaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nombre', 'usuario', 'email', 'calle', 'modificar'];

  constructor(
    private placeh: PlaceholderService,
    private ruta: Router) {}
  
  ngOnInit() {
    this.dataSource = new TablaDataSource(this.placeh);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  public editarForm(id: number) {
    this.ruta.navigate(["address-form/edit/", id])
  }

  public nuevoUsu() {
    this.ruta.navigate(["address-form/new/"])
  }
}
