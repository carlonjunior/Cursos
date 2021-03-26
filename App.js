import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Upbar from './src/components/Upbar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      curso: 0,
      periodo: 0,
      turno: 0,
      cursos: [
        { key: 0, nome: 'Curso' },
        { key: 1, nome: 'Administração' },
        { key: 2, nome: 'Sistemas de Informação' },
        { key: 3, nome: 'Ciências Contábeis' },
        { key: 4, nome: 'Agronomia' }
      ],
      periodos: [
        { key: 0, periodo: 'Período' },
        { key: 1, periodo: '1°' },
        { key: 2, periodo: '2°' },
        { key: 3, periodo: '3°' },
        { key: 4, periodo: '4°' },
        { key: 5, periodo: '5°' },
        { key: 6, periodo: '6°' },
        { key: 7, periodo: '7°' },
        { key: 8, periodo: '8°' },
        { key: 9, periodo: '9°' },
        { key: 10, periodo: '10°' }
      ],
      turnos: [
        { key: 0, turno: 'Turno' },
        { key: 1, turno: 'Diurno' },
        { key: 2, turno: 'Noturno' },
        { key: 3, turno: 'Integral' },
      ]
    }
  }

  render() {

    let cursosItem = this.state.cursos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    })
    let periodosItem = this.state.periodos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.periodo} />
    })
    let turnosItem = this.state.turnos.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.turno} />
    })

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Upbar />
        <Text style={styles.selecione}>Selecione os parâmetros: </Text>
        <TextInput style={styles.input}
          placeholder='Digite seu nome'
          onChangeText={(texto) => this.setState({ input: texto })}
        />
        <Picker
          style={styles.picke}
          selectedValue={this.state.curso}
          onValueChange={(itemValue, itemIndex) => this.setState({ curso: itemValue })}
        >
          {cursosItem}
        </Picker>
        <Picker
          style={styles.picke}
          selectedValue={this.state.periodo}
          onValueChange={(itemValue, itemIndex) => this.setState({ periodo: itemValue })}
        >
          {periodosItem}
        </Picker>
        <Picker

          style={styles.picke}
          selectedValue={this.state.turno}
          onValueChange={(itemValue, itemIndex) => this.setState({ turno: itemValue })}
        >
          {turnosItem}
        </Picker>
        <Text style={styles.selecione}>Informações inseridas:</Text>




        <Text style={styles.selecione2}>Nome: {this.state.input}</Text>
        <Text style={styles.selecione2}>Curso: {this.state.cursos[this.state.curso].nome}</Text>
        <View style={styles.linha}>
          <Text style={styles.selecione2}>Período: {this.state.periodos[this.state.periodo].periodo}</Text>
          <Text style={styles.selecione2}>Turno: {this.state.turnos[this.state.turno].turno}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  selecione: {
    marginTop: 15,
    marginLeft: 30,
    fontSize: 19
  },
  selecione2: {
    marginTop: 15,
    marginLeft: 30,
    fontSize: 16
  },
  input: {
    marginLeft: 30,
    marginTop: 15,
    width: 260,
    height: 30,
    borderColor: '#c9c9c9',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 5
  },
  picke: {
    marginLeft: 30,
    marginTop: 15,
    width: 260,
    height: 30,
    borderRadius: 5,
    borderColor: '#c9c9c9',
    paddingLeft: 5
  },
  linha: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }
});
