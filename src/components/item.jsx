import React, { Fragment } from 'react';

const Item = (props) => {
    const getType = () => {
        switch (props.type) {
            case 1:
                return (
                    <Fragment>
                        <div className='world__item__avatar world__item__avatar--live' />
                        <div>
                            <div className='world__item__title'>Жизнь</div>
                            <div className='world__item__desc'>Ку-ку</div>
                        </div>
                    </Fragment>
                );
            default:
                return (
                    <Fragment>{getStatus()}</Fragment>
                );
        }
    };

    const getStatus = () => {
        switch (props.status) {
            case 1:
                return (
                    <Fragment>
                        <div className='world__item__avatar world__item__avatar--living' />
                        <div>
                            <div className='world__item__title'>Живая</div>
                            <div className='world__item__desc'>и шевелится!</div>
                        </div>
                    </Fragment>
                );
            default:
                return (
                    <Fragment>
                        <div className='world__item__avatar world__item__avatar--dead' />
                        <div>
                            <div className='world__item__title'>Мёртвая</div>
                            <div className='world__item__desc'>или прикидывается</div>
                        </div>
                    </Fragment>
                );
        }
    };

    return (
        <div className='world__item'>
            {getType()}
        </div>
    );
};

export default Item;
