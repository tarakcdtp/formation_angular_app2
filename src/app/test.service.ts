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
}
