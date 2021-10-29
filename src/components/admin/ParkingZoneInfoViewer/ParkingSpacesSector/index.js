import {
  Wrapper,
  Title,
  DividerUnderTitle,
  ParkingSpacesNumberWrapper,
  NumberLabel,
  NumberValue,
  TableWrapper,
} from './styles';

const ParkingSpacesSector = ({
  parkingSpacesNumber,
  parkingSpacesLocation,
}) => {
  return (
    <Wrapper>
      <Title>Паркинг Места</Title>
      <DividerUnderTitle />
      <ParkingSpacesNumberWrapper>
        <NumberLabel>Вкупно паркинг места:</NumberLabel>
        <NumberValue>{parkingSpacesNumber}</NumberValue>
      </ParkingSpacesNumberWrapper>
      <TableWrapper>
        <table>
          <thead>
            <tr>
              <th>Латитуда</th>
              <th>Лонгитуда</th>
              <th>Број</th>
            </tr>
          </thead>
          <tbody>
            {parkingSpacesLocation.map(
              ({ lat, lng, parkingSpaceNumber }, index) => (
                <tr key={index}>
                  <td>{lat}</td>
                  <td>{lng}</td>
                  <td>{parkingSpaceNumber}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </TableWrapper>
    </Wrapper>
  );
};

export default ParkingSpacesSector;
