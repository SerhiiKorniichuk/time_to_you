import React from 'react';
import {
  View
} from 'react-native';
import { NativeRouter } from "react-router-native";
import GuestRoutes from "../routes/guestRoutes/GuestRoutes";
import PrivateRoutes from "../routes/privateRoutes/PrivateRoutes";

const App = () => {
  return (
      <NativeRouter>
        <View>
        {
          true ?
            <GuestRoutes />
            :
            <PrivateRoutes />
        }
        </View>
      </NativeRouter>
  );
};

export default App;
