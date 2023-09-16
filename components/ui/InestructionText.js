import {Text, StyleSheet} from 'react-native'
import Colors from '../../constants/Colors';
const InestructionText = ({children}) => {

   return <Text style={styles.instructionText}> {children} </Text>
}

export default InestructionText;

const styles = StyleSheet.create({
    instructionText:{
        color: Colors.accent500,
        fontSize: 24
    },
})