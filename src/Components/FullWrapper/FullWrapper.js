import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Actions,
    EditBtn,
    DeleteBtn,
    CloseBtn,
} from '../ViewActions/styles';
import {
    Header,
    Wrapper,
    InnerWrapper,
    TypeWrapper,
} from './styles';
import { deleteData, icons } from '../../Helpers/helpers';
import Modal from '../Modal/Modal';

const FullWrapper = ({
    children,
    contentType,
    id,
    title,
}) => {
    const [ displayDeleteModal, setDisplayDeleteModal ] = useState(false);
    const history = useHistory();

    return (
        <>
            <Wrapper>
                <Actions>
                    <EditBtn
                        onClick={() => history.push(`/${contentType}/${id}/edit`)}
                    >
                        <FontAwesomeIcon icon="edit" />
                    </EditBtn>
                    <DeleteBtn
                        onClick={() => setDisplayDeleteModal(true)}
                    >
                        <FontAwesomeIcon icon="trash-alt" />
                    </DeleteBtn>
                    <CloseBtn
                        onClick={() => history.push('/')}
                    >
                        <FontAwesomeIcon icon="times" />
                    </CloseBtn>
                </Actions>

                <InnerWrapper>
                    <Header>
                        <TypeWrapper>
                            <FontAwesomeIcon icon={icons[contentType]} size="4x" />
                            {' '}
                            <h2>{contentType}</h2>
                        </TypeWrapper>
                        <h1>{title}</h1>
                    </Header>
                    {children}
                </InnerWrapper>
            </Wrapper>
            {
                displayDeleteModal && (
                    <Modal
                        handleOk={() => {
                            deleteData(id)
                            history.push('/');
                        }}
                        handleCancel={() => setDisplayDeleteModal(false)}
                    >
                        <h1>
                            Are you sure you want to delete this {contentType} - {title}?
                        </h1>
                    </Modal>
                )
            }
        </>
    )
}

export default FullWrapper;