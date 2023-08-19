import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {changeUserLocation} from '../redux/reducers';
import BackgroundService from 'react-native-background-actions';

const sleep = time => new Promise(resolve => setTimeout(resolve, time));

const FetchUserLocation = () => {
  const userLocation = useSelector(state => state.userLocation);
  const userSession = useSelector(state => state.userSession);
  const dispatch = useDispatch();

  //   console.log(userLocation);

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

  const veryIntensiveTask = async taskDataArguments => {
    const {delay} = taskDataArguments;
    await new Promise(async resolve => {
      for (let i = 0; BackgroundService.isRunning(); i++) {
        getLocation();
        await sleep(delay);
      }
    });
  };

  const startBackgroundTask = async () => {
    const options = {
      taskName: 'FetchUserLocationTask',
      taskTitle: 'Fetching User Location',
      taskDesc: 'Getting user location every 10 seconds',
      taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
      },
      color: '#FF00FF',
      parameters: {
        delay: 10000,
      },
    };

    await BackgroundService.start(veryIntensiveTask, options);
  };

  useEffect(() => {
    if (userSession) {
      startBackgroundTask();
    }

    return () => {
      BackgroundService.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSession]);

  return null;
};

export default FetchUserLocation;
