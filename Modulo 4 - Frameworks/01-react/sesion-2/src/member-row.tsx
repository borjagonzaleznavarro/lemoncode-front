import React from "react";
import { MemberEntity } from "./model";

interface Props {
    item: MemberEntity;
    randomNumber: number;
}

export const MemberRow: React.FC<Props> = (props) => (
    <React.Fragment key={props.item.id}>
        <img src={props.item.avatar_url} alt="avatar" />
        <span>{props.item.id}</span>
        <span>
            {props.item.login} - {props.randomNumber}
        </span>
    </React.Fragment>
);