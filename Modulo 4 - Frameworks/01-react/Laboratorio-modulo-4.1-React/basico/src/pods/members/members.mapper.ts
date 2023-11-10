export const mapMembersToVM = membersList => {
    return membersList.map(member => mapMemberToVM(member));
}

const mapMemberToVM = member => {
    return { ...member };
}