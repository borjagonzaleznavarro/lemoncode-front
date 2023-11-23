import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MemberEntity } from "src/app/model/MemberEntity";
import { MembersService } from "src/app/services/members.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  members: MemberEntity[] = [];
  newMember: MemberEntity;

  editForm: FormGroup;
  idControl: FormControl;
  loginControl: FormControl;
  avatarControl: FormControl;

  memberSelected: MemberEntity;

  constructor(
    private membersService: MembersService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.fetchMembers();

    this.newMember = {
      id: "",
      login: "",
      avatar_url: "",
    };

    this.createEditForm();
  }

  createEditForm() {
    this.editForm = this.fb.group({
      id: ["", Validators.required],
      login: ["", [Validators.required, Validators.minLength(6)]],
      avatar_url: "",
    });
    this.idControl = this.editForm.get("id") as FormControl;
    this.loginControl = this.editForm.get("login") as FormControl;
    this.avatarControl = this.editForm.get("avatar_url") as FormControl;
  }

  ngOnInit(): void {}

  fetchMembers() {
    this.membersService.getMembers().subscribe((json) => (this.members = json));
  }

  handleFileInput(files: FileList) {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.newMember.avatar_url = reader.result as string;
    };
  }

  add() {
    this.membersService.addMember(this.newMember).then(() => {
      this.members = [...this.members];
      this.members.push(this.newMember);
      this.newMember = {
        id: "",
        login: "",
        avatar_url: "",
      };
    });
  }

  select(member: MemberEntity) {
    this.memberSelected = { ...member };

    // this.editForm.setValue(this.memberSelected);
    this.editForm.patchValue(this.memberSelected);
  }

  handleEditFileInput(files: FileList) {
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (event) => {
      this.avatarControl.setValue(reader.result);
    };
  }

  save() {
    if (this.editForm.valid) {
      this.members = [...this.members];
      const member = this.editForm.value;
      const index = this.members.findIndex(item => item.id === member.id);
      this.members.splice(index, 1, member);
    }
  }

  // add() {
  //   this.members = [...this.members];
  //   this.members.push(this.newMember);
  //   this.newMember = {
  //     id: "",
  //     login: "",
  //     avatar_url: "",
  //   };
  // }
}
