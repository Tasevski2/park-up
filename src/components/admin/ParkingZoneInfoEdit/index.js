import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';

import {
  DeleteButton,
  RightSideWrapper,
  ZoneSectorAndDeleteButtonWrapper,
  SaveButton,
  CancelButton,
  CloseIcon,
  ModalContainer,
  ModalTitle,
  ModalDescription,
  ButtonsWrapper,
  ModalButton,
} from './styles';

import ZoneSectorEdit from './ZoneSectorEdit';
import ResponsiblePersonsSectorEdit from './ResponsiblePersonsSectorEdit';
import ParkingSpacesSectorEdit from './ParkingSpacesSectorEdit';
import { IconButton, Fade } from '@mui/material';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';

import { employeesAddData, mockResponsiblePersons } from './mockData';

const ParkingZoneInfoEdit = ({ zone, setEditMode }) => {
  const history = useHistory();
  // ZoneSectorEdit
  const { data: zoneSectorData, onFormChange: setZoneSectorData } = useForm({
    zoneName: zone.zoneName,
    hourlyRate: zone.hourlyRate,
    from: zone.workingHours.from,
    to: zone.workingHours.to,
    lat: zone.location.center.lat,
    lng: zone.location.center.lng,
  });
  const [zoneColor, setZoneColor] = useState(zone.zoneColor);
  const [newCoord, setNewCoord] = useState({
    newLat: '',
    newLng: '',
  });
  const [coords, setCoords] = useState(zone.location.coords);

  const handleCoordsChange = ({ type, payload }) => {
    switch (type) {
      case 'add':
        const createdCoord = {
          lat: parseFloat(newCoord.newLat),
          lng: parseFloat(newCoord.newLng),
        };
        setNewCoord({
          newLat: '',
          newLng: '',
        });
        setCoords([...coords, createdCoord]);
        return;
      case 'delete':
        const updatedDeleteCoords = [...coords];
        updatedDeleteCoords.splice(payload.index, 1);
        setCoords(updatedDeleteCoords);
        return;
      case 'update':
        const updatedCoords = [...coords];
        updatedCoords[payload.index] = {
          ...updatedCoords[payload.index],
          [payload.column]: parseFloat(payload.value),
        };
        setCoords(updatedCoords);
        return;
      default:
        return;
    }
  };

  // ResponsiblePersonSectorEdit

  const [responsiblePersons, setResponsiblePersons] = useState(
    // TODO TAKE DATA FROM ZONE
    mockResponsiblePersons
  );
  const [employeesDataModal, setEmployeesDataModal] = useState(() => {
    const responsiblePersonsId = mockResponsiblePersons.map((p) => p.id);
    const filteredEmployees = employeesAddData.filter(
      (emp) => !responsiblePersonsId.includes(emp.id)
    );
    return filteredEmployees;
  });
  const handleEmployeesAndResponsiblePersonsChange = ({ type, person }) => {
    switch (type) {
      case 'delete':
        setResponsiblePersons(
          responsiblePersons.filter((p) => p.id !== person.id)
        );
        setEmployeesDataModal([...employeesDataModal, person]);
        return;
      case 'add':
        setEmployeesDataModal(
          employeesDataModal.filter((emp) => emp.id !== person.id)
        );
        setResponsiblePersons([...responsiblePersons, person]);
        return;
      default:
        return;
    }
  };
  // ParkingSpacesSectorEdit

  const [parkingSpacesNumber, setParkingSpacesNumber] = useState(
    zone.parkingSpacesNumber
  );
  const [newParkingSpace, setNewParkingSpace] = useState({
    lat: '',
    lng: '',
    parkingSpaceNumber: '',
  });
  const [parkingSpaces, setParkingSpaces] = useState(zone.parkingSpaces);
  const handleParkingSpacesChange = ({ type, payload }) => {
    switch (type) {
      case 'add':
        const createParkingSpace = {
          lat: parseFloat(newParkingSpace.lat),
          lng: parseFloat(newParkingSpace.lng),
          parkingSpaceNumber: newParkingSpace.parkingSpaceNumber,
          isTaken: false,
        };
        setNewParkingSpace({
          lat: '',
          lng: '',
          parkingSpaceNumber: '',
        });
        setParkingSpaces([...parkingSpaces, createParkingSpace]);
        setParkingSpacesNumber(parkingSpacesNumber + 1);
        return;
      case 'delete':
        const updatedDeleteParkingSpaces = [...parkingSpaces];
        updatedDeleteParkingSpaces.splice(payload.index, 1);
        setParkingSpaces(updatedDeleteParkingSpaces);
        setParkingSpacesNumber(parkingSpacesNumber - 1);
        return;
      case 'update':
        const updatedParkingSpaces = [...parkingSpaces];
        updatedParkingSpaces[payload.index] = {
          ...updatedParkingSpaces[payload.index],
          [payload.column]:
            payload.column !== 'parkingSpaceNumber'
              ? parseFloat(payload.value)
              : payload.value,
        };
        setParkingSpaces(updatedParkingSpaces);
        return;
      default:
        return;
    }
  };

  const [modal, setModal] = useState({
    open: false,
    title: '',
    description: '',
    btnLeftText: '',
    btnRightText: '',
    btnLeftOnClick: null,
    btnRightOnClick: null,
  });

  const closeModal = () => {
    setModal({
      open: false,
      title: '',
      description: '',
      btnLeftText: '',
      btnRightText: '',
      btnLeftOnClick: null,
      btnRightOnClick: null,
    });
  };

  // CANCEL BUTTON MODAL HANDLING
  const handleCancelLeftClick = () => {
    setEditMode(false);
  };

  const handleCancel = () => {
    setModal({
      open: true,
      title: 'Несочувани Измени',
      description:
        'Изменетите податоците нема да бидат сочувани. Дали сакате да ги зачувате?',
      btnLeftText: 'НЕ',
      btnRightText: 'ДА',
      btnLeftOnClick: handleCancelLeftClick,
      btnRightOnClick: handleSaveChangesRightClick,
    });
  };

  // SAVE CHANGES BUTTON MODAL HANDLING

  const handleSaveChangesRightClick = () => {
    console.log(`The new data is saved:`);
    const editedZoneN = {
      ...zone,
      zoneName: zoneSectorData.zoneName,
      hourlyRate: zoneSectorData.hourlyRate,
      workingHours: {
        from: zoneSectorData.from,
        to: zoneSectorData.to,
      },
      zoneColor: zoneColor,
      location: {
        center: {
          lat: zoneSectorData.lat,
          lng: zoneSectorData.lng,
        },
        coords: coords,
      },
      parkingSpaces: parkingSpaces,
      parkingSpacesNumber: parkingSpacesNumber,
      responsiblePersons: responsiblePersons.map((rp) => rp.id),
    };
    console.log(editedZoneN);
    setEditMode(false);
  };

  const handleSaveChanges = () => {
    setModal({
      open: true,
      title: 'Зачувување Измени',
      description: 'Дали сте сигурни дека сакате да ги сочувате измените?',
      btnLeftText: 'НЕ',
      btnRightText: 'ДА',
      btnLeftOnClick: closeModal,
      btnRightOnClick: handleSaveChangesRightClick,
    });
  };

  // DELETE ZONE BUTTON MODAL HANDLING

  const handleDeleteZoneRightClick = () => {
    console.log(`Zone with ID: ${zone.id} will be deleted!`);
    history.push('/');
  };

  const handleDeleteZone = () => {
    setModal({
      open: true,
      title: 'Бришење на Зона',
      description: 'Дали сте сигурни дека сакате да ја избришете зоната?',
      btnLeftText: 'НЕ',
      btnRightText: 'ДА',
      btnLeftOnClick: closeModal,
      btnRightOnClick: handleDeleteZoneRightClick,
    });
  };

  return (
    <>
      <Modal
        open={modal.open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          onClick: closeModal,
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Fade in={modal.open}>
          <ModalContainer>
            <IconButton
              style={{
                marginLeft: 320,
              }}
              onClick={closeModal}
            >
              <CloseIcon />
            </IconButton>
            <ModalTitle>{modal.title}</ModalTitle>
            <ModalDescription>{modal.description}</ModalDescription>
            <ButtonsWrapper>
              <ModalButton onClick={modal.btnLeftOnClick}>
                {modal.btnLeftText}
              </ModalButton>
              <ModalButton onClick={modal.btnRightOnClick}>
                {modal.btnRightText}
              </ModalButton>
            </ButtonsWrapper>
          </ModalContainer>
        </Fade>
      </Modal>
      <ZoneSectorAndDeleteButtonWrapper>
        <DeleteButton onClick={handleDeleteZone}>Избриши Зона</DeleteButton>
        <ZoneSectorEdit
          {...zoneSectorData}
          setZoneSectorData={setZoneSectorData}
          zoneColor={zoneColor}
          setZoneColor={setZoneColor}
          newCoord={newCoord}
          setNewCoord={setNewCoord}
          coords={coords}
          handleCoordsChange={handleCoordsChange}
        />
      </ZoneSectorAndDeleteButtonWrapper>
      <RightSideWrapper>
        <SaveButton onClick={handleSaveChanges}>Зачувај Промени</SaveButton>
        <CancelButton onClick={handleCancel}>Откажи</CancelButton>
        <ResponsiblePersonsSectorEdit
          responsiblePersons={responsiblePersons}
          employeesDataModal={employeesDataModal}
          handleChange={handleEmployeesAndResponsiblePersonsChange}
        />
        <ParkingSpacesSectorEdit
          parkingSpacesNumber={parkingSpacesNumber}
          parkingSpaces={parkingSpaces}
          newParkingSpace={newParkingSpace}
          setNewParkingSpace={setNewParkingSpace}
          handleParkingSpacesChange={handleParkingSpacesChange}
        />
      </RightSideWrapper>
    </>
  );
};

export default ParkingZoneInfoEdit;
