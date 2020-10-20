import React, { memo, useState, useEffect } from 'react';

import Item from 'components/item';

import 'static/styles/common.scss';

/*
lifeDefault = {
    type: 1, // 1 - жизнь, 2 - клетка
    status: 1 // 0 - мертва, 1 - жива
};
*/

const AppContainer = memo(() => {
    const [world, updateWorld] = useState([]);
    const [status, updateStatus] = useState(0);

    useEffect(() => {
        function handleUpdateWorld() {
            if(status === 1) return false;

            if(world.length >= 2) {
                const alive = getСonsilience();

                switch (alive) {
                    case 2:
                        createLife();
                        break;
                    case 6:
                        killLife();
                        break;
                    default: break;
                }
            }
        }

        handleUpdateWorld();
    }, [world]);

    const getRandomInt = max => {
        return Math.floor(Math.random() * Math.floor(max));
    };

    const getСonsilience = () => {
        const arr = world.slice(-3);

        return arr.reduce((sum, curItem, index) => {
            const prevItem = !!arr[index - 1] ? arr[index - 1] : {};

            if(curItem.type === 2 && prevItem.type !== 1 && prevItem.status === curItem.status) {
                return curItem.status !== 0 ? sum + 2 : sum + 3;
            }

            return 0;
        }, 0);
    };

    const createLife = () => {
        const newWorld = [...world];

        newWorld.push({
            type: 1,
            status: 0
        });

        updateWorld(newWorld);
    };

    const killLife = () => {
        const arr = [...world];
        const searchIndex = arr.length - 4;
        const curItem = arr[searchIndex];

        if(!!curItem && curItem.type === 1) {
            arr.splice(searchIndex, 1);
        }

        updateStatus(1);
        updateWorld(arr);
    };

    const createCage = () => {
        const newWorld = [...world];

        newWorld.push({
            type: 2,
            status: getRandomInt(2)
        });

        updateStatus(0);
        updateWorld(newWorld);
    };

    return (
        <div className='world'>
            <h1>Клеточное наполнение</h1>
            {world.map((item, key) => <Item key={key} {...item} />)}
            <button
                className='world__btn'
                onClick={() => createCage()}
            >
                сотворить
            </button>
        </div>
    );
});

export default AppContainer;
