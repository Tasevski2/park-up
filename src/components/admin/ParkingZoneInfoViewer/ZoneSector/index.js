import {
  Wrapper,
  Title,
  DividerUnderTitle,
  Characteristics,
  KeyValueWrapper,
  Key,
  Value,
  ColorCircleWrapper,
  ColorCircle,
  ZoneCenterLocation,
  SmallTitle,
  LatLngCenter,
  LabelAndLatLngWrapper,
  LatLngLabel,
  LatLngValue,
  ZoneCornersLocation,
  TableWrapper,
} from './styles';

const ZoneSector = ({
  name,
  hourlyRate,
  workingHours,
  color,
  centerLocation,
  coords,
}) => {
  return (
    <Wrapper>
      <Title>Паркинг Зона</Title>
      <DividerUnderTitle />
      <Characteristics>
        <KeyValueWrapper>
          <Key>Назив:</Key>
          <Value>{name ?? ''}</Value>
        </KeyValueWrapper>
        <KeyValueWrapper>
          <Key>Цена од Час:</Key>
          <Value>{hourlyRate ?? 0} ден.</Value>
        </KeyValueWrapper>
        <KeyValueWrapper>
          <Key>Работни часови:</Key>
          <Value>
            {workingHours.from < 10
              ? '0' + workingHours.from
              : workingHours.from}{' '}
            - {workingHours.to < 10 ? '0' + workingHours.to : workingHours.to}
          </Value>
        </KeyValueWrapper>
        <KeyValueWrapper>
          <Key>Боја на зона:</Key>
          <ColorCircleWrapper>
            <ColorCircle $color={color} />
          </ColorCircleWrapper>
        </KeyValueWrapper>
      </Characteristics>

      <ZoneCenterLocation>
        <SmallTitle>Центар на Зона</SmallTitle>
        <LatLngCenter>
          <LabelAndLatLngWrapper>
            <LatLngLabel htmlFor='lat-value'>Латитуда:</LatLngLabel>
            <LatLngValue id='lat-value'>
              {centerLocation?.lat ?? ''}
            </LatLngValue>
          </LabelAndLatLngWrapper>
          <LabelAndLatLngWrapper>
            <LatLngLabel htmlFor='lng-value'>Лонгитуда:</LatLngLabel>
            <LatLngValue id='lng-value'>
              {centerLocation?.lat ?? ''}
            </LatLngValue>
          </LabelAndLatLngWrapper>
        </LatLngCenter>
      </ZoneCenterLocation>

      <ZoneCornersLocation>
        <SmallTitle>Темиња на Зона</SmallTitle>
        <TableWrapper>
          <table>
            <thead>
              <tr>
                <th>Латитуда</th>
                <th>Лонгитуда</th>
              </tr>
            </thead>
            <tbody>
              {coords.map(({ lat, lng }, index) => (
                <tr key={index}>
                  <td>{lat}</td>
                  <td>{lng}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableWrapper>
      </ZoneCornersLocation>
    </Wrapper>
  );
};

export default ZoneSector;
