import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "../Screens/Dashboard";
import PlayOnline from "../Screens/Dashboard/PlayOnline";
import MakeAClub from "../Screens/Dashboard/MakeAClub";
import Auction from "../Screens/Dashboard/MakeAClub/Auction";
import Simple from "../Screens/Dashboard/PlayOnline/Simple";
import StartBC from "../Screens/Dashboard/PlayOnline/Simple/StartBC";
import SpinWheel from "../Screens/Dashboard/PlayOnline/Simple/SpinWheel";
import UserEntries from "../Screens/Dashboard/PlayOnline/Simple/UserEntries";
import Result from "../Screens/Dashboard/PlayOnline/Simple/Result";
import StartAuctionBC from "../Screens/Dashboard/MakeAClub/Auction/StartAuctionBC";
import WaitingPage from "../Screens/Dashboard/MakeAClub/Auction/WaitingPage";
import TimeRemaining from "../Screens/Dashboard/MakeAClub/Auction/TimeRemaining";
import Bidding from "../Screens/Dashboard/MakeAClub/Auction/Bidding";
import WalletMainVerified from "../Screens/WalletScreen/WalletMainVerified";
import NotVerifiedWallet from "../Screens/WalletScreen/NotVerifiedWallet";
import AddToWallet from "../Screens/WalletScreen/AddToWallet";
import BankDetails from "../Screens/WalletScreen/BankDetails";
import BankDetailsSecond from "../Screens/WalletScreen/BankDetailsSecond";
import BankPassword from "../Screens/WalletScreen/BankPassword";
import InsufficientBalance from "../Screens/WalletScreen/InsufficientBalance";
import Withdraw from "../Screens/WalletScreen/Withdraw";
import WithdrawAccount from "../Screens/WalletScreen/WithdrawAccount";
import WithdrawDetails from "../Screens/WalletScreen/WithdrawDetails";
import WithdrawPassword from "../Screens/WalletScreen/WithdrawPassword";
import CustomSimple from "../Screens/Dashboard/MakeAClub/Simple";
import CustomStartBc from "../Screens/Dashboard/MakeAClub/Simple/CustomStartBc";
import CustomSpinWheel from "../Screens/Dashboard/MakeAClub/Simple/CustomSpinWheel";
import AuctionEntries from "../Screens/Dashboard/PlayOnline/Auction/AuctionEntries";
import AuctionResult from "../Screens/Dashboard/PlayOnline/Auction/AuctionResult";
import WinnerPage from "../Screens/Dashboard/PlayOnline/Auction/WinnerPage";

const Stack = createNativeStackNavigator();

const MainDashboardNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      {/* esha */}
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Playonline"
        component={PlayOnline}
        options={{ headerShown: false }}
      />

      {/* esha end */}

      {/* himanshu */}
      <Stack.Screen
        name="Simple"
        component={Simple}
        options={{ headerShown: false }}
      />

      {/* esha */}

      <Stack.Screen
        name="Startbc"
        component={StartBC}
        options={{ headerShown: false }}
      />

      {/* esha end*/}

      <Stack.Screen
        name="SpinWheel"
        component={SpinWheel}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserEntries"
        component={UserEntries}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Result"
        component={Result}
        options={{ headerShown: false }}
      />
      {/* himanshu end */}

      {/* esha */}

      <Stack.Screen
        name="Makeaclub"
        component={MakeAClub}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CustomSimple"
        component={CustomSimple}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="CustomStartBc"
        component={CustomStartBc}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CustomSpinWheel"
        component={CustomSpinWheel}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Auction"
        component={Auction}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="StartAuctionbc"
        component={StartAuctionBC}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WaitingPage"
        component={WaitingPage}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="TimeRemaining"
        component={TimeRemaining}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bidding"
        component={Bidding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AuctionEntries"
        component={AuctionEntries}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AuctionResult"
        component={AuctionResult}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WinnerPage"
        component={WinnerPage}
        options={{ headerShown: false }}
      />

      {/* esha end */}

      {/* Sakshi */}
      <Stack.Screen
        name="WalletMainVerified"
        component={WalletMainVerified}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotVerifiedWallet"
        component={NotVerifiedWallet}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="AddToWallet"
        component={AddToWallet}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BankDetails"
        component={BankDetails}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BankDetailsSecond"
        component={BankDetailsSecond}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BankPassword"
        component={BankPassword}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="InsufficientBalance"
        component={InsufficientBalance}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Withdraw"
        component={Withdraw}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="WithdrawAccount"
        component={WithdrawAccount}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WithdrawDetails"
        component={WithdrawDetails}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="WithdrawPassword"
        component={WithdrawPassword}
        options={{ headerShown: false }}
      />

      {/* Sakshi end*/}
    </Stack.Navigator>
  );
};

export default MainDashboardNavigator;

const styles = StyleSheet.create({});
