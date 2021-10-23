import {
  Wrapper,
  Title,
  DividerUnderTitle,
  TableWrapper,
  Elipsis,
} from './styles';

const ResponsiblePersonsSector = ({ persons }) => {
  return (
    <Wrapper>
      <Title>Одговорни Лица</Title>
      <DividerUnderTitle />
      <TableWrapper>
        <table>
          <thead>
            <tr>
              <th>Име</th>
              <th>Презиме</th>
              <th>Повеќе</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person, index) => {
              let splitted = person.split(' ');
              let firstName = splitted[0] ?? '';
              let lastName = splitted[1] ?? '';
              return (
                <tr key={index}>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>
                    <Elipsis target='_blank' to={`/employees/${index + 1}`}>
                      ...
                    </Elipsis>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </TableWrapper>
    </Wrapper>
  );
};

export default ResponsiblePersonsSector;
