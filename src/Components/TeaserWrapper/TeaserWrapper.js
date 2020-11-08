import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Actions,
    EditBtn,
    DeleteBtn,
    Header,
    Wrapper,
    InnerWrapper,
} from './styles';
import { deleteData, icons } from '../../Helpers/helpers';
import Modal from '../Modal/Modal';

const TeaserWrapper = ({
    children,
    contentType,
    id,
    title,
    forceUpdate,
}) => {
    const [ displayDeleteModal, setDisplayDeleteModal ] = useState(false);
    const history = useHistory();

    const viewFullContent = () => {
        history.push(`/${contentType}/${id}`);
    }

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
                </Actions>

                <InnerWrapper
                    tabIndex={0}
                    role="button"
                    onClick={viewFullContent}
                    onKeyPress={viewFullContent}
                >
                    <Header>
                        <FontAwesomeIcon icon={icons[contentType]} />
                        {' '}
                        <h2>{title}</h2>
                    </Header>
                    {children}
                </InnerWrapper>
            </Wrapper>
            {
                displayDeleteModal && (
                    <Modal
                        handleOk={() => {
                            deleteData(id)
                            forceUpdate()
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

export default TeaserWrapper;