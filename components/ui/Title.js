import { Text , StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const Title = ({children}) => {

    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        padding: 12
    }
})