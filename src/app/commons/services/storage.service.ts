import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setObject(key: string, value: any): Observable<void> {
    return from(Storage.set({ 
      key, 
      value: JSON.stringify(value)
    }));
  }

  getObject(key: string) {
    return from(Storage.get({ key })).pipe(map(obj => JSON.parse(obj.value)))
  }

  setItem(item: any): Observable<void> {
    return from(Storage.set(item));
  }

  getItem(key: string): Observable<string> {
    return from(Storage.get({ key })).pipe(map(obj => obj.value));
  }

  removeItem(key: string): Observable<void> {
    return from(Storage.remove({ key }));
  }

  keys(): Observable<string[]> {
    return from(Storage.keys()).pipe(map(obj => obj.keys));
  }

  clear(): Observable<void> {
    return from(Storage.clear());
  }

}
