import { useState, Fragment } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/startGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/Colors';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [userNamber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  const StartNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);

  }
  const Screen = () => {
    if (gameIsOver && userNamber) {
      return <GameOverScreen roundsNumber={guessRounds} userNumber={userNamber} onStartNewGame={StartNewGameHandler} />
    }
    if (userNamber) {
      return screen = <GameScreen userNumber={userNamber} onGameOver={gameOverHandler} />
    }
    return <StartGameScreen onPickNumber={pickedNumberHandler} />
  }

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }
  return (
    <Fragment>
      <StatusBar style='light'/>
      <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/images/dices.jpg')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}>
          <SafeAreaView style={styles.rootScreen}>
            <Screen />
          </SafeAreaView>
          {/* SafeAreaView used to make content not hidden by mobile pad that may contain mobile camera  */}
        </ImageBackground>
      </LinearGradient>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.35
  }
});
