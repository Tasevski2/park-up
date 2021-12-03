import { useState } from 'react';
import {
    SessionInfo,
    PlateSelectInput,
    PlateAndAddPlateBtnWrapper,
    ZoneSelectInput,
    DropdownItem,
    AddIcon,
    AddPlate,
    Input,
    SavePlate,
    SaveIcon,
    PlateDropdownItem,
    RemoveIcon,
} from './styles';

import { sessionStatus as enumsSessionStatus } from '../../../../config/enums';
import useForm from '../../../../hooks/useForm';
import useSaveUserPlate from '../../../../hooks/useSaveUserPlate';
import useDeleteUserPlate from '../../../../hooks/useDeleteUserPlate';
import AbsoluteLoader from '../../../Loaders/AbsoluteLoader';
import { IconButton } from '@mui/material';

const mockPlates = ['SK-1234-AD', 'KU-4123-FA', 'OH-4949-FG', 'SK-8190-AV'];

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 150,
            width: '35px',
        },
    },
};

const SessionUser = ({
    sessionStatus,
    zones,
    data,
    onFormChange,
    setNewData,
}) => {
    const [newPlate, setNewPlate] = useState('');
    const [toggleAddPlate, setToggleAddPlate] = useState(false);
    const { saveUserPlate } = useSaveUserPlate();
    const { deleteUserPlate } = useDeleteUserPlate();
    const [isLoadingSavePlate, setIsLoadingSavePlate] = useState(false);
    const [isLoadingDeletePlate, setIsLoadingDeletePlate] = useState({
        state: false,
        itemInd: null,
    });
    const savePlate = (plate) => {
        mockPlates.unshift(plate);
        setToggleAddPlate(false);
        setNewData({ ...data, plate: newPlate });
        setNewPlate('');
    };

    const handleSavePlate = () => {
        saveUserPlate({
            savePlate,
            plate: newPlate,
            setIsLoadingSavePlate,
        });
    };

    const deletePlate = (plate) => {
        let index = mockPlates.indexOf(plate);
        mockPlates.splice(index, 1);
        if (mockPlates.length > index) {
            setNewData({ ...data, plate: mockPlates[index] });
        } else {
            index--;
            if (mockPlates.length !== 0) {
                setNewData({
                    ...data,
                    plate: mockPlates[mockPlates.length - 1],
                });
            } else {
                setNewData({ ...data, plate: 'NONE' });
            }
        }
    };

    const handleDeletePlate = (e, plate) => {
        e.stopPropagation();
        let ind = mockPlates.indexOf(plate);
        deleteUserPlate({ deletePlate, plate, ind, setIsLoadingDeletePlate });
    };

    return (
        <SessionInfo>
            <PlateAndAddPlateBtnWrapper
                center={sessionStatus !== enumsSessionStatus.idle}
            >
                {!toggleAddPlate ? (
                    <PlateSelectInput
                        MenuProps={MenuProps}
                        name='plate'
                        onChange={onFormChange}
                        value={data.plate}
                        renderValue={(v) => v}
                        inputProps={{
                            readOnly:
                                sessionStatus === enumsSessionStatus.idle
                                    ? false
                                    : true,
                        }}
                        $show={sessionStatus === enumsSessionStatus.idle}
                    >
                        <DropdownItem value='NONE'>
                            <em>NONE</em>
                        </DropdownItem>
                        {mockPlates.map((p, ind) => (
                            <PlateDropdownItem key={ind} value={p}>
                                {p}
                                {isLoadingDeletePlate.state &&
                                isLoadingDeletePlate.itemInd === ind ? (
                                    <AbsoluteLoader
                                        containerStyle={{
                                            width: '41.19px',
                                            height: '41.19px',
                                        }}
                                    />
                                ) : (
                                    <IconButton
                                        style={{ padding: '3px', zIndex: 100 }}
                                        onClick={(e) =>
                                            handleDeletePlate(e, p, ind)
                                        }
                                    >
                                        <RemoveIcon />
                                    </IconButton>
                                )}
                            </PlateDropdownItem>
                        ))}
                    </PlateSelectInput>
                ) : (
                    <Input
                        autoFocus
                        disabled={
                            sessionStatus === enumsSessionStatus.idle
                                ? false
                                : true
                        }
                        name='newPlate'
                        style={{
                            width: '49%',
                            textAlign: 'center',
                        }}
                        value={newPlate}
                        onChange={(e) => setNewPlate(e.target.value)}
                    />
                )}
                {sessionStatus === enumsSessionStatus.idle ? (
                    !toggleAddPlate ? (
                        <AddPlate onClick={() => setToggleAddPlate(true)}>
                            <AddIcon />
                            таблица
                        </AddPlate>
                    ) : isLoadingSavePlate ? (
                        <AbsoluteLoader
                            containerStyle={{
                                width: '59.44px',
                                height: '59.44px',
                                margin: 'auto',
                            }}
                        />
                    ) : (
                        <SavePlate onClick={handleSavePlate}>
                            <SaveIcon />
                            сочувај
                        </SavePlate>
                    )
                ) : null}
            </PlateAndAddPlateBtnWrapper>
            <ZoneSelectInput
                MenuProps={MenuProps}
                name='zone'
                onChange={onFormChange}
                value={data.zone}
                inputProps={{
                    readOnly:
                        sessionStatus === enumsSessionStatus.idle
                            ? false
                            : true,
                }}
                $show={sessionStatus === enumsSessionStatus.idle}
            >
                <DropdownItem value='NONE'>
                    <em>NONE</em>
                </DropdownItem>
                {zones.map((z, ind) => (
                    <DropdownItem key={ind} value={z}>
                        {z}
                    </DropdownItem>
                ))}
            </ZoneSelectInput>
        </SessionInfo>
    );
};

export default SessionUser;
