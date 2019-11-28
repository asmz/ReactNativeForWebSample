import React, { Component } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {}

interface State {
  count: number
}

class Counter extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { count: 0 }
  }

  increment = () => this.setState({ count: this.state.count + 1 })
  decrement = () => this.setState({ count: this.state.count - 1 })
  reset = () => this.setState({ count: 0 })

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.countText}>{this.state.count}</Text>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={this.increment}>
            <Text>increment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.reset}>
            <Text>reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.decrement}>
            <Text>decrement</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  countText: {
    flex: 0.2,
    fontSize: 90,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    color: 'black',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    width: 100,
    height: 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
  },
})

export default Counter
