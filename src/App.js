import React, {Component} from 'react';
import Button from '@material/react-button';
import TextField, {HelperText, Input} from '@material/react-text-field';
import Radio, {NativeRadioControl} from '@material/react-radio';
import {Cell, Grid, Row} from '@material/react-layout-grid';

import './app.scss';


class App extends Component {


  

  state = {name: '', lastName: ''};
  state = {gender: null};

  render() {
    return (


      <div>
        <Grid align="middle">
        <Row>
          <Cell columns={4} align="middle">
           <TextField
          label='Vardas'
          helperText={<HelperText>Įveskite vardą</HelperText>}
          onTrailingIconSelect={() => this.setState({name: ''})}
        ><Input
        value={this.state.name}
        onChange={(e) => this.setState({name: e.currentTarget.name})}
           />
        </TextField>
        </Cell>
        </Row>
        <Row>
        <Cell columns={4} align="middle">
        <TextField
          label='Pavardė'
          helperText={<HelperText>Įveskite pavardę</HelperText>}
        ><Input
        value={this.state.lastName}
        onChange={(e) => this.setState({lastName: e.currentTarget.lastName})}
           />
        </TextField>
        </Cell>
        </Row>
        <Row>
        <Cell columns={4} align="middle">
        <Radio label='Moteris' key='moteris'>
          <NativeRadioControl
            value='moteris'
            id='moteris'
            onChange={(e) => this.setState({gender: e.target.value})}
          />
        </Radio>
        <Radio label='Vyras' key='vyras'>
          <NativeRadioControl
            name='vyras'
            value='vyras'
            id='vyras'
            onChange={(e) => this.setState({gender: e.target.value})}
          />
        </Radio>

          </Cell>
          </Row>
          <Row>
          <Cell columns={4} align="middle"> 
        <Button
          raised
          className='button-alternate'
        >
          Siųsti
        </Button> 
        </Cell>
        
        </Row>
      </Grid>

      </div>
    );
  }
}

export default App;
