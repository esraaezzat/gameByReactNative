import {Text, StyleSheet} from 'react-native'
import Colors from '../../constants/Colors';
const InestructionText = ({children, style}) => {

   return <Text style={[styles.instructionText, style]}> {children} </Text>
}

export default InestructionText;

const styles = StyleSheet.create({
    instructionText:{
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24
    },
})