import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InestructionText from '../components/ui/InestructionText';
import Colors from '../constants/Colors';

const StartGameScreen = ({ onPickNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    }
    const resetInputHandler = () => {
        setEnteredNumber('');
    }
    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Number has to be a number between 1 and 99',
                [{ text: 'OKay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }

        onPickNumber(chosenNumber)
    }
    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <View style={styles.cardStyle}>
                <InestructionText> Enter A Number </InestructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType='number-pad'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}> Reset </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}> Confirm </PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    cardStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 24,
        padding: 16,
        marginTop: 36,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 10, // andoriod boxshadow
        shadowColor: 'black',// ios boxShadow
        shadowOffset: { width: 0, height: 2 },// ios boxShadow
        shadowRadius: 6,// ios boxShadow
        shadowOpacity: 0.25, // ios boxShadow
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})