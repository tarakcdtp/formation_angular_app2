import { Injectable } from '@angular/core';
import { AppModule } from './app.module';
import { HmModule } from './hm/hm.module';
import { Query } from './query';

@Injectable(
  {
    providedIn : 'root'
  }
)
export class TestService {
  queries: Query[] = [
    {
      id: '478-012',
      name: 'execution 2023-2024',
      startDate: 2023,
      endDate: 2024,
      status: 'public',
      domain: 'mission'
    },
    {
      id: '478-013',
      name: 'depense 2023-2024',
      startDate: 2023,
      endDate: 2024,
      status: 'public',
      domain: 'etablissement'
    },
    {
      id: '478-014',
      name: 'mission 2023-2024',
      startDate: 2023,
      endDate: 2024,
      status: 'public',
      domain: 'mission'
    }
  ];
  private _query!: Query | undefined;
  private _x: number = 0;
  constructor() { }

  set query(value: Query | undefined) {
    this._query = value;
  }

  get query() : Query | undefined {
    return this._query;
  }

  set x(value: number) {
    this._x = value;
  }

  get x() : number {
    return this._x;
  }
   
  newQuery(query:any) {
    let idx=this.queries.findIndex(q=>query.id==q.id);
    if (idx>-1) {this.queries[idx]=query} 
    else {this.queries.push(query);}
  }

  getQueryById(id: string | null) {
    return this.queries.find((q) => q.id == id);
  }
}
