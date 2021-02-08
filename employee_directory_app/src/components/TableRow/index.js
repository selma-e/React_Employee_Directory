export const TableRow = function ({ image, name, phone, email, dob }) {
  return (
    <tr>
      <th scope="row">
        <img src={image} />
      </th>
      <td>{name}</td>
      <td>{phone}</td>
      <td>
        <a href={"mailto:" + email}>{email}</a>
      </td>
      <td>{dob}</td>
    </tr>
  );
};
