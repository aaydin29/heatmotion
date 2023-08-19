import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {changeUserLocation} from '../redux/reducers';

const FetchUserLocation = () => {
  const userLocation = useSelector(state => state.userLocation);
  const userSession = useSelector(state => state.userSession);
  const dispatch = useDispatch();

  console.log(userLocation);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        dispatch(
          changeUserLocation({
            latitude: latitude,
            longitude: longitude,
          }),
        );
      },
      error => {
        console.error(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  useEffect(() => {
    if (userSession) {
      getLocation();

      const intervalId = setInterval(() => {
        getLocation();
      }, 10000);

      return () => {
        clearInterval(intervalId);
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSession]);

  return null;
};

export default FetchUserLocation;
