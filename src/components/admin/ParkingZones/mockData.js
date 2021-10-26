export const parkingZones = [
  {
    id: 1,
    zoneName: 'Zona 1',
    responsiblePersons: ['Viktor Tasevski', 'Dracevcanec'], // THIS SHOULD BE IN THE ParkingZones Call Only for the Card. For the ZoneInfo We need More Data for The Employees. This should be array of employee objects.
    parkingSpacesNumber: 69,
    takenParkingSpaces: 34,
    hourlyRate: 30,
    workingHours: {
      from: 5,
      to: 24,
    },
    zoneColor: '#FFD700',
    location: {
      center: {
        lat: 41.937907,
        lng: 21.51213,
      },
      coords: [
        { lat: 41.937749, lng: 21.511095 },
        { lat: 41.936971, lng: 21.511534 },
        { lat: 41.93834, lng: 21.51407 },
        { lat: 41.939031, lng: 21.511914 },
      ],
    },
    parkingSpaces: [
      {
        lat: '41.938271',
        lng: '21.512380',
        parkingSpaceNumber: 'A21',
        isTaken: true,
      },
      {
        lat: '41.938284',
        lng: '21.512387',
        parkingSpaceNumber: 'A1',
        isTaken: false,
      },
      {
        lat: '41.938292',
        lng: '21.512365',
        parkingSpaceNumber: 'B55',
        isTaken: true,
      },
      {
        lat: '41.938279',
        lng: '21.512359',
        parkingSpaceNumber: 'C20',
        isTaken: false,
      },
    ],
  },
  {
    id: 2,
    zoneName: 'Zona 2',
    responsiblePersons: ['Andrej Tavcioski', 'Vlaevec', 'Skopjaniste'],
    parkingSpacesNumber: 100,
    takenParkingSpaces: 99,
    hourlyRate: 50,
    workingHours: {
      from: '5',
      to: '24',
    },
  },
  {
    id: 3,
    zoneName: 'Zona 3',
    responsiblePersons: ['David Trajkovski', 'Kumanovecot'],
    parkingSpacesNumber: 36,
    takenParkingSpaces: 5,
    hourlyRate: 10,
    workingHours: '12:00 - 17:00',
  },
  {
    id: 4,
    zoneName: 'Zona 4',
    responsiblePersons: ['Nekoj od POC'],
    parkingSpacesNumber: 150,
    takenParkingSpaces: 130,
    hourlyRate: 100,
    workingHours: {
      from: '5',
      to: '24',
    },
  },
  {
    id: 5,
    zoneName: 'Zona 5',
    responsiblePersons: [],
    parkingSpacesNumber: 360,
    takenParkingSpaces: 250,
    hourlyRate: 30,
    workingHours: {
      from: '5',
      to: '24',
    },
  },
];
