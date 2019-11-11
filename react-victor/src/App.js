import React from 'react';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    width: 400,
  },
  textFieldEndereco: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    width: 300,
  },
  textFieldNumero: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1),
    width: 100,
  },
}));

function App() {

  const classes = useStyles();

  return (
    <div className="box">
      <div id="titulo-propriedade">
        Adicione uma Propriedade
      </div>
      <hr></hr>
      <div className="box-menor">

        <div className="box-content">

          <TextField
            id="standard-required"
            label="Nome"
            defaultValue=""
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-required"
            label="País"
            defaultValue=""
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-required"
            label="Estado"
            defaultValue=""
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standard-required"
            label="Cidade"
            defaultValue=""
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="standard-required"
            label="CEP"
            defaultValue=""
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="standard-required"
            label="Endereço"
            defaultValue=""
            className={classes.textFieldEndereco}
            margin="normal"
            width="50"
          />

          <TextField
            id="standard-required"
            label="Numero"
            defaultValue=""
            className={classes.textFieldNumero}
            margin="normal"
            width="50"
          />

        </div>
      </div>

      <Button className="botao-primario" variant="contained">
        Salvar
      </Button>

      <Button  className="botao-secundario" color="default" size="small">
        Cancelar
      </Button>
    </div>
  );
}

export default App;
