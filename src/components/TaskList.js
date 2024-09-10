import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebaseConnection';
import { TextField, Button, List, ListItem, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ListaTarefas = () => {
  const [novaTarefa, setNovaTarefa] = useState('');
  const [tarefas] = useCollectionData(collection(db, `tarefas-${auth.currentUser.uid}`), { idField: 'id' });

  const adicionarTarefa = async () => {
    if (novaTarefa.trim()) {
      await addDoc(collection(db, `tarefas-${auth.currentUser.uid}`), { texto: novaTarefa, completa: false });
      setNovaTarefa('');
    }
  };

  const alternarTarefaCompleta = (tarefa) => 
    updateDoc(doc(db, `tarefas-${auth.currentUser.uid}`, tarefa.id), { completa: !tarefa.completa });

  const deletarTarefa = (id) => deleteDoc(doc(db, `tarefas-${auth.currentUser.uid}`, id));

  return (
    <div>
      <TextField fullWidth variant="outlined" label="Nova Tarefa" value={novaTarefa} onChange={(e) => setNovaTarefa(e.target.value)} />
      <Button variant="contained" onClick={adicionarTarefa} style={{ marginTop: 10 }}>Adicionar Tarefa</Button>
      <List>
        {tarefas?.map(tarefa => (
          <ListItem key={tarefa.id}>
            <Checkbox checked={tarefa.completa} onChange={() => alternarTarefaCompleta(tarefa)} />
            {tarefa.texto}
            <IconButton onClick={() => deletarTarefa(tarefa.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListaTarefas;
