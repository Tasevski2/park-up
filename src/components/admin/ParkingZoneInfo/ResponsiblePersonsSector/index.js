import { Wrapper, Title, DividerUnderTitle, TableWrapper } from './styles';

const ResponsiblePersonsSector = ({ persons }) => {
  return (
    <Wrapper>
      <Title>Одговорни Лица</Title>
      <DividerUnderTitle />
      <TableWrapper>
        <table>
          <thead>
            <tr>
              <th>Емаил</th>
              <th>Име</th>
              <th>Презиме</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person, index) => {
              let splitted = person.split(' ');
              let firstName = splitted[0] ?? '';
              let lastName = splitted[1] ?? '';
              return (
                <tr key={index}>
                  <td>viktor-tasevski@hotmail.com</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                </tr>
              );
            })}
            <tr>
              <td>viktor-tasevski@hotmail.com</td>
              <td>firstName</td>
              <td>lastName</td>
            </tr>
            <tr>
              <td>viktor-tasevski@hotmail.com</td>
              <td>asdsada</td>
              <td>lastName</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
    </Wrapper>
  );
};

export default ResponsiblePersonsSector;
