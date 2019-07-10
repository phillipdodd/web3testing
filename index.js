import Head from 'next/head';
import Container from '@material-ui/core/Container';
import Griddening from './components/grid';
import AxieCard from './components/axieCard';

const Index = () => (
    <div>
        <Head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <Container>
            <Griddening>
                <AxieCard image="https://storage.googleapis.com/assets.axieinfinity.com/axies/36707/axie/axie-full-transparent.png" />
                <AxieCard image="https://storage.googleapis.com/assets.axieinfinity.com/axies/27957/axie/axie-full-transparent.png" />
            </Griddening>
        </Container>
    </div>
);

export default Index;