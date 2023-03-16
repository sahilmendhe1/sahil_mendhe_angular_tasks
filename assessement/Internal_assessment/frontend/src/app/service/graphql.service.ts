import { HttpClient } from '@angular/common/http';
import { TemplateBinding } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(readonly http: HttpClient) { }


  fetch(query: string, variables: object = {}) {
    return this.http.post('/graphql', { query, variables });
  }



}
export function gql(stringPieces: TemplateStringsArray): string {
  return stringPieces.join('');

}
