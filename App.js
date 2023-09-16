import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/startGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from './constants/Colors';

export default function App() {
  const [userNamber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    //setGameIsOver(false);
  }
  const Screen = () => {
    if(gameIsOver && userNamber){
      return <GameOverScreen />
    }
    if (userNamber) {
      return screen = <GameScreen  userNumber={userNamber} onGameOver={gameOverHandler}/>
    }
    return <StartGameScreen onPickNumber={pickedNumberHandler} />
  }

  const gameOverHandler = () => {
    setGameIsOver(true)
  }
  return (
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
