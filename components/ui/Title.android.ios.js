import { Text , StyleSheet, Platform} from 'react-native';
import Colors from '../../constants/Colors';


const Title = ({children}) => {

    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'open-sans-bold',
        // fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        // borderWidth: Platform.OS === 'android' ? 0 : 2,
        // borderWidth: Platform.select({ios: 2, android: 0}),
        borderColor: '#fff',
        padding: 12,
        maxWidth: '80%',
        width: 300
        
    }
})