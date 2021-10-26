import moment from 'moment';

export const sessionsData = [
  {
    id: 1,
    start: moment().format('hh:mm - DD.MM.yyyy'),
    plate: 'SK-8190-AV',
    status: 'active',
    parkingSpaceNumber: 'A31',
  },
  {
    id: 2,
    start: moment().format('hh:mm - DD.MM.yyyy'),
    plate: 'ST-9312-OK',
    status: 'idle',
    parkingSpaceNumber: '',
  },
  {
    id: 3,
    start: moment().format('hh:mm - DD.MM.yyyy'),
    end: moment().format('hh:mm - DD.MM.yyyy'),
    plate: 'SK-6511-OS',
    status: 'over',
    parkingSpaceNumber: 'D4',
  },
];
