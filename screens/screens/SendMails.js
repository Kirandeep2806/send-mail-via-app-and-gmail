import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity, ScrollView, RefreshControl } from "react-native";
import * as MailComposer from 'expo-mail-composer';

let SendMails = ({ navigation }) => {

  const [refresh, setRefresh] = useState(false);
  const [recepient, setRecepient] = useState('');
  const [cc, setCc] = useState('');
  const [bcc, setBcc] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const resetFieldValues = React.useCallback(() => {
    setRefresh(true);
    wait(200).then(() => setRefresh(false), setRecepient(''), setCc(''), setBcc(''), setSubject(''), setText(''));
  }, []);

  const changeRecepient = (current_txt) => { setRecepient(current_txt); }
  const changeCc = (current_txt) => { setCc(current_txt); }
  const changeBcc = (current_txt) => { setBcc(current_txt); }
  const changeSubject = (current_txt) => { setSubject(current_txt); }
  const changeText = (current_txt) => { setText(current_txt); }

  const SendMail = () => {
    MailComposer.composeAsync({
      recipients: recepient.split(',').map(sendTo => sendTo.trim()),
      ccRecipients: cc.split(',').map(sendToCc => sendToCc.trim()),
      bccRecipients: bcc.split(',').map(sendToBcc => sendToBcc.trim()),
      subject: subject,
      body: text,
    })
  }

  return (
    <ScrollView style={styles.container} refreshControl={<RefreshControl refreshing={refresh}
      onRefresh={resetFieldValues} />}>
      <View style={styles.referDetails}>
        <Text style={styles.label}>To           : </Text>
        <TextInput style={styles.txtinput} multiline={true} onChangeText={changeRecepient} value={recepient}></TextInput>
      </View>
      <View style={styles.referDetails}>
        <Text style={styles.label}>Cc           : </Text>
        <TextInput style={styles.txtinput} multiline={true} onChangeText={changeCc} value={cc}></TextInput>
      </View>
      <View style={styles.referDetails}>
        <Text style={styles.label}>Bcc         : </Text>
        <TextInput style={styles.txtinput} multiline={true} onChangeText={changeBcc} value={bcc}></TextInput>
      </View>
      <View style={styles.referDetails}>
        <Text style={styles.label}>Subject   : </Text>
        <TextInput style={styles.txtinput} multiline={true} onChangeText={changeSubject} value={subject}></TextInput>
      </View>
      <View style={styles.referDetails}>
        <Text style={styles.label}>Text         : </Text>
        <TextInput style={styles.txtinput} multiline={true} onChangeText={changeText} value={text}></TextInput>
      </View>
      <TouchableOpacity style={styles.send} activeOpacity={0.8} onPress={SendMail} >
        <View>
          <Text style={{ color: '#fff' }}>Send</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: '10%',
  },

  referDetails: {
    marginLeft: 15,
    flexDirection: 'row',
  },

  label: {
    fontSize: 16,
  },

  txtinput: {
    borderBottomWidth: 1,
    flexGrow: 1,
    marginRight: 20,
    fontSize: 13,
    width: '50%',
    bottom: 2,
    left: 10,
    marginBottom: 10,
  },

  send: {
    alignSelf: 'center',
    marginTop: 20,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: 'rgb(204, 88, 16)',
    borderRadius: 7,
    marginBottom: '20%',
  },

});

export default SendMails;