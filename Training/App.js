import React from 'react'
import { View } from 'react-native'

import { actionCreators } from './src/todoListRedux';
import List from './src/List';
import Input from './src/Input';
import Title from './src/Title';

import store from './src/store';

export default class App extends React.Component {

  state = { todos: [] }

  componentDidMount() {
    const {todos} = store.getState()
    this.setState({todos})

    this.unsubscribe = store.subscribe(() => {
      const {todos} = store.getState()
      this.setState({todos})
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  onAddTodo = (text) => {
    store.dispatch(actionCreators.add(text))
  }

  onRemoveTodo = (index) => {
    store.dispatch(actionCreators.remove(index))
  }

  render() {
    const {todos} = this.state

    return (
      <View>
        <Title>
          To-Do List
        </Title>
        <Input
          placeholder={'Type a todo, then hit enter!'}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={todos}
          onPressItem={this.onRemoveTodo}
        />
      </View>
    )
  }
}
