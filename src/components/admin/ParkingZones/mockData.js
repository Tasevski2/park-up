export const parkingZones = [
  {
    id: 1,
    zoneName: 'Zona 1',
    responsiblePersons: ['Viktor Tasevski', 'Dracevcanec'],
    parkingSpaces: 69,
    takenParkingSpaces: 34,
    areaColor: '#FFD700',
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
    parkingSpacesLocation: [
      {
        lat: '41.938271',
        lng: '21.512380',
        parkingSpaceNumber: 'A21',
        free: true,
      },
      {
        lat: '41.938284',
        lng: '21.512387',
        parkingSpaceNumber: 'A1',
        free: false,
      },
      {
        lat: '41.938292',
        lng: '21.512365',
        parkingSpaceNumber: 'B55',
        free: true,
      },
      {
        lat: '41.938279',
        lng: '21.512359',
        parkingSpaceNumber: 'C20',
        free: false,
      },
    ],
  },
  {
    id: 2,
    zoneName: 'Zona 2',
    responsiblePersons: ['Andrej Tavcioski', 'Vlaevec', 'Skopjaniste'],
    parkingSpaces: 100,
    takenParkingSpaces: 99,
  },
  {
    id: 3,
    zoneName: 'Zona 3',
    responsiblePersons: ['David Trajkovski', 'Kumanovecot'],
    parkingSpaces: 36,
    takenParkingSpaces: 5,
  },
  {
    id: 4,
    zoneName: 'Zona 4',
    responsiblePersons: [
      'Nekoj od POC',
      'Nekoj drug od POC',
      'Nekoj tret od POC',
      'Nekoj cetvrt od POC',
    ],
    parkingSpaces: 150,
    takenParkingSpaces: 130,
  },
  {
    id: 5,
    zoneName: 'Zona 5',
    responsiblePersons: ['Nekoj od Silbo'],
    parkingSpaces: 360,
    takenParkingSpaces: 250,
  },
];
