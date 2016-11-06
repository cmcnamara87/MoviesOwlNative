import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';

export default ({ startTime }) => {
  const time = moment(new Date(startTime * 1000));
  return (
    <Text>{time.format('LT')} {time.fromNow()}</Text>
  );
}
