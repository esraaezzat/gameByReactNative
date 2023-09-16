import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from "react-native";
import Title from '../components/ui/Title';
import InestructionText from '../components/ui/InestructionText';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';

const generateRandomBetween = (min, max, exclude) => {
    const rndNumber = Math.floor(Math.random() * (max - min)) + min;

    if (rndNumber == exclude) {
        generateRandomBetween(min, max, exclude);
    }
    else {
        return rndNumber
    }
}


let minBoundary = 1;
let maxBoundary = 100;


const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(
        1, 
        100, 
        userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() =>{
        if(currentGuess === userNumber){
            onGameOver();
        }
    },[currentGuess, userNumber, onGameOver])
    const nextGuessHandler = (direction) => { // direction lower or greater
        if ((direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber))
            {
                Alert.alert('Dont lie!', 
                'This is wrong', 
                [{text: 'sory', style:'cancel'}]);
                return;
            }

            if (direction === 'lower') {
                maxBoundary = currentGuess;
            }
            else {
                minBoundary = currentGuess + 1;
            }

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return <View style={styles.screen}>
        <Title style={styles.title}>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InestructionText>Heighr or lower?</InestructionText>
            <View>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}> + </PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}> - </PrimaryButton>
            </View>
        </Card>

        {/* <View> LOG ROUNDS</View> */}
    </View>
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    }
})