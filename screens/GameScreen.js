import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, FlatList, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Title from '../components/ui/Title';
import InestructionText from '../components/ui/InestructionText';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import GuessLogItem from '../components/game/GuessLogItem';
import Colors from '../constants/Colors';

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
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRoundsListLength);
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])
    const nextGuessHandler = (direction) => { // direction lower or greater
        if ((direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert('Dont lie!',
                'This is wrong',
                [{ text: 'sory', style: 'cancel' }]);
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
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds])
    }

    const guessRoundsListLength = guessRounds.length;

    return <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View style={styles.cardStyle}>
            <InestructionText style={styles.inestructionText}>Heighr or lower?</InestructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name='md-add' size={24} color='white' />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name='md-remove' size={24} color='white' />
                    </PrimaryButton>
                </View>
            </View>
        </View>

        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <View style={styles.listContainer}>
            <FlatList
                data={guessRounds}
                renderItem={(itemData) => <GuessLogItem
                    roundNumber={guessRoundsListLength - itemData.index}
                    guess={itemData.item}
                />}
                keyExtractor={(item) => item}
            />
        </View>
    </View>
}

export default GameScreen;
const deviceWidth = Dimensions.get('window').width; 
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    inestructionText: {
        marginBottom: 12
    },
    cardStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 16,
        marginTop: deviceWidth < 380 ? 18: 36,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 10, // andoriod boxshadow
        shadowColor: 'black',// ios boxShadow
        shadowOffset: { width: 0, height: 2 },// ios boxShadow
        shadowRadius: 6,// ios boxShadow
        shadowOpacity: 0.25, // ios boxShadow
    },
    listContainer:{
        flex: 1,
        padding: 16
    }
})