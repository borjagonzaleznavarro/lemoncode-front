import React from "react";
import { Link, useParams } from "react-router-dom";

interface MemberDetailEntity {
  id: string;
  avatar_url: string;
  login: string;
  name: string;
  company: string;
  bio: string;
}

export const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [member, setMember] = React.useState<MemberDetailEntity>();
  const [error, setError] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          setError(true);
        }
      })
      .then(setMember)
      .then(() => setLoading(false));
  }, []);

  return error ? (
    <h3>Se ha producido un error</h3>
  ) : loading ? (
    <p>loading...</p>
  ) : (
    <>
      <h3>{member?.login}</h3>
      <img src={member.avatar_url} width="150" alt={member.id} />
      <p>id: {member?.id}</p>
      <p>name: {member?.name}</p>
      <p>company: {member?.company}</p>
      <p>bio: {member?.bio}</p>
    </>
  );
};
