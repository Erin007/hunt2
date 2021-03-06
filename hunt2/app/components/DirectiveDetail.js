//DirectiveDetail.js

import React from 'react';
import { View, Text } from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection'

const DirectiveDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{ props.directive.name }</Text>
      </CardSection>
    </Card>
  )
};

export default DirectiveDetail;
