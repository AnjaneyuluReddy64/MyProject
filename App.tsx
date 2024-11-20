import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Variables from './src/ModuleOne/Variables';
import DataTypes from './src/ModuleOne/DataTypes';
import Function from './src/ModuleOne/Function';
import Hooks from './src/ModuleOne/Hooks';
import Chaining from './src/ModuleOne/Chaining';
import CounterApp from './src/ModuleOne/CounterApp';
import Inline from './src/ModuleTwo/CssTypes/Inline';
import Internal from './src/ModuleTwo/CssTypes/Internal';
import External from './src/ModuleTwo/CssTypes/External';
import ScrollViewComponent from './src/ModuleTwo/ScrollViewComponent';
import FlatListComponent from './src/ModuleTwo/FlatListComponent';
import FlatlistInsideScrollView from './src/ModuleTwo/FlatlistInsideScrollView';
import ActivityIndicatorComponent from './src/ModuleTwo/ActivityIndicatorComponent';
import SortComponent from './src/ModuleOne/SortComponent';
import FliterComponent from './src/ModuleOne/FliterComponent';
import ModelComponent from './src/ModuleTwo/ModelComponent';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* ModuleOne */}
      {/* <DataTypes /> */}
      {/* <Variables /> */}
      {/* <Function /> */}
      {/* <Hooks /> */}
      {/* <Chaining /> */}
      {/* <Conditons /> */}
      {/* <CounterApp /> */}
      {/* <SortComponent /> */}
      {/* <FliterComponent /> */}
      {/* ModuleTwo */}
      {/* <Inline /> */}
      {/* <Internal /> */}
      {/* <External /> */}
      {/* <ResponsiveCss /> */}
      {/* <ScrollViewComponent /> */}
      {/* <FlatListComponent /> */}
      {/* <FlatlistInsideScrollView /> */}
      {/* <ActivityIndicatorComponent /> */}
      <ModelComponent />
    </View>
  );
};

export default App;
