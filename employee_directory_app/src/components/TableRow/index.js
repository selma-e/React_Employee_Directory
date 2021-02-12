export const TableRow = function ({
  image,
  firstName,
  lastName,
  phone,
  email,
  dob,
}) {
  return (
    <tr>
      <th scope="row">
        <img src={image} alt="" />
      </th>
      <td>{firstName + " " + lastName}</td>
      <td>{phone}</td>
      <td>
        <a href={"mailto:" + email}>{email}</a>
      </td>
      <td>{dob}</td>
    </tr>
  );
};
