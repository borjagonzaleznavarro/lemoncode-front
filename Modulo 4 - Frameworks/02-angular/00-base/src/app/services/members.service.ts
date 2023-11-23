import { Injectable } from "@angular/core";
import { MemberEntity } from "../model/MemberEntity";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MembersService {
  members: MemberEntity[] | null;
  constructor(private http: HttpClient) {}

  getMembers(): Observable<MemberEntity[]> {
    
    if (this.members) {
      return of(this.members);
    }

    return this.http.get<MemberEntity[]>(
      "https://api.github.com/orgs/lemoncode/members"
    );

    // return fetch(`https://api.github.com/orgs/lemoncode/members`).then(
    //   (response) => response.json()
    // );
  }

  // addMember(member: MemberEntity): Promise<boolean> {
  //   return Promise.resolve(true);
  // }

  addMember(member: MemberEntity): Promise<boolean> {
    return Promise.resolve(true);
  }
}
