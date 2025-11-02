import ServerRackSVG from '../components/images/servers/ServerRackSVG';
import TurbineSVG from '../components/images/turbine/TurbineSVG';

const HomePage = () => {
  return (
    <>
      <TurbineSVG />
      <ServerRackSVG />
        <h1 className="text-3xl text-red-500 font-bold underline">
    Hello worrld!
  </h1>
    </>
  );
};

export default HomePage;
