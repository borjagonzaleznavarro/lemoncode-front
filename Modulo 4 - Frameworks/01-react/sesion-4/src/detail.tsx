import React from "react";
import { Link, useParams } from "react-router-dom";

export const DetailPage : React.FC = () => {
    const { id } = useParams<{ id: string}>();
    
    return (
      <>
        <h4>Hello from detail page {id}</h4>
        <Link to="/">Go to login page</Link>
      </>
    );
  };
