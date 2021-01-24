import React from "react";
import "./style.css";

function Card(props) {
  return (
    <tr>
      <th>
        <img alt={props.firstName} src={props.picture.large} />
      </th>
      <td>
        {props.firstName}
      </td>
      <td>
        {props.lastName}
      </td>
      <td>
        {props.email}
      </td>
      <td>
        {props.phone}
      </td>
      <td>
        {props.city}
      </td>
    </tr>
  );
}

export default Card;
