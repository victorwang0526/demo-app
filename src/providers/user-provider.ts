import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  login(username, password, deviceId): Promise<any> {
    return this.http.post('/login', {
      username, password, deviceId
    }).toPromise();
  }

  getUserInfo(): Promise<any> {
    return this.http.get('/sys/user/info').map((res: any) => res.data).toPromise();
  }

}
