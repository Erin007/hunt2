//DirectiveList.js

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import DirectiveDetail from './DirectiveDetail';

class DirectiveList extends Component {

    state = { directives: [] }; //initial or empty state, property of this
    //this.state.directives would return an empty array

    componentWillMount (){
      //console.log('component will mount in directive list')
      //console.log('this.state.directives', this.state.directives)
      axios.get('https://treasure-chest-api.herokuapp.com/').then( response => this.setState( { directives: response.data.directives }))
        .catch(function (error) {
          console.log(error);
        });;
    }

    renderDirectives() {
      console.log('renderingDirectives() in DirectiveList');
      console.log('this.state.directives', this.state.directives);
      console.log('this.state.directives[0]', this.state.directives[0]);

      if (typeof this.state.directives[0] !== 'undefined')  {
        console.log('this.state.directives[0].name', this.state.directives[0].name)

        return this.state.directives.map(directive =>
          <DirectiveDetail key={ directive.id } directive = {directive} />);
      }
    }

    render() {
      console.log(this.state);

      return (
        <ScrollView>
          { this.renderDirectives() }
        </ScrollView>
      );
    }
}

export default DirectiveList;
