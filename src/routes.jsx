import AppContainer from 'containers/App';

const routes = [
    {
        path: '*',
        exact: true,
        restricted: false,
        component: AppContainer
    }
];

export default routes;
