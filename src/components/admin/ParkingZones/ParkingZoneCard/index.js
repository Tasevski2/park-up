import {
    ParkingZoneWrapper,
    Container,
    ParkingName,
    InfoWrapper,
    Label,
    Value,
    ProgressBar,
    ProgressBarLabel
} from './styles';

const ParkingZoneCard = ({ info }) => {
    return <ParkingZoneWrapper item xs={11} sm={6} md={3}>
        <Container>
            <ParkingName>{info.parkingName}</ParkingName>
            <InfoWrapper>
                <Label>Odgovorni lica:</Label>
                {
                    info.responsiblePersons.slice(0, 1).map((person, index) => <Value key={index}>{person}</Value>)
                }
                {
                    info.responsiblePersons.length > 1 ? <Value>...</Value> : null
                }
            </InfoWrapper>
            <InfoWrapper>
                <Label>Broj parking mesta:</Label>
                <Value>{info.parkingSpaces}</Value>
            </InfoWrapper>
            <ProgressBar
                percent={Math.floor(info.takenParkingSpaces / info.parkingSpaces * 100)}
                label={() => <ProgressBarLabel >{info.takenParkingSpaces}/{info.parkingSpaces}</ProgressBarLabel>}
            />
        </Container>
    </ParkingZoneWrapper>
};

export default ParkingZoneCard;