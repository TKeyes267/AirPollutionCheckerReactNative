import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import {getPostCode} from '../utils/getPostCode';
import {useState, Dispatch, SetStateAction} from 'react';

function Postcode(
  {
    // setAirQualityData,
    // setDataLoaded,
    // errorPost,
    // setErrorPost,
    // setErrorGeo,
  },
) {
  const [errorPost, setErrorPost] = useState(false);
  const [errorPostcodeMsg, setPostcodeErrorMsg] = useState('');
  const [airQualityData, setAirQualityData] = useState();
  const [postcode, setPostcode] = useState('');

  const handleSubmit = () => {
    //console.log(code);

    // const postcode = event.target[0].value;
    // setPostcode('Sk12 1AG');

    getPostCode(postcode)
      .then(data => {
        setAirQualityData(data);
        // setDataLoaded(true);
        // setErrorPost(false);
        // setErrorGeo(false);
      })
      .catch(e => {
        // setErrorPost(true);
        setPostcodeErrorMsg(
          'Postcode can not be found, Please enter a valid Postcode',
        );
        console.log(e);
        console.log(errorPostcodeMsg);
      });
  };

  console.log(airQualityData);

  return (
    <SafeAreaView>
      <View style={styles.box}>
        <Text style={styles.textSubHeader}>Search by Postcode</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Post Code"
          onChangeText={postcode => {
            setPostcode(postcode);
          }}
        />
        <Button title="Submit Postcode" onPress={handleSubmit} color="#00f" />

        {errorPost ? <Alert variant="danger">{errorPostcodeMsg}</Alert> : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'start',
  },
  box: {
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: '20%',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    color: 'blue',
    borderWidth: 2,
    borderColor: 'blue',
    margin: '20%',
    padding: '10%',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: '20%',
  },

  textSubHeader: {
    color: '#000000',
    fontSize: 30,
    margin: '20%',
  },
});

export default Postcode;
