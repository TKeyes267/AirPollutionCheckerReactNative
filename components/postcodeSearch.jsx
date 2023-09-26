import {StyleSheet, View, Text} from 'react-native';
import {getPostCode} from '../utils/getPostCode';
import {useState, Dispatch, SetStateAction} from 'react';

function Postcode({
  setAirQualityData,
  setDataLoaded,
  errorPost,
  setErrorPost,
  setErrorGeo,
}) {
  const [errorPostcodeMsg, setPostcodeErrorMsg] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    const postcode = event.target[0].value;

    getPostCode(postcode)
      .then(data => {
        setAirQualityData(data);
        setDataLoaded(true);
        setErrorPost(false);
        setErrorGeo(false);
      })
      .catch(e => {
        setErrorPost(true);
        setPostcodeErrorMsg(
          'Postcode can not be found, Please enter a valid Postcode',
        );
        console.log(e);
      });
  };

  return (
    <View>
      {/* <Form onSubmit={handleSubmit}> */}
      <Text style={styles.textSubHeader}>Search by Postcode</Text>

      {/* <Row>
          <Col>
            <Form.Group>
              <Form.Control
                type="postcode"
                placeholder="Postcode"></Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form> */}

      {errorPost ? <Alert variant="danger">{errorPostcodeMsg}</Alert> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20px',
  },
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'left',
    justifyContent: 'start',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 20,
  },
  textHeader: {
    color: '#ffffff',
    fontSize: 40,
    margin: 10,
  },
  textSubHeader: {
    color: '#000000',
    fontSize: 30,
    margin: 20,
  },
});

export default Postcode;
