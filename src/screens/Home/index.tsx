import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { styles } from "./styles";

import { Participant } from "../../components/participant";
export default function Home() {
  const participants = [
    "Mateus",
    "Duda",
    "Henrique",
    "Anna",
    "Danilo",
    "Gisele",
    "Gabi",
    "Edinho",
    "Ariene",
    "Zélia",
    "Renata",
  ];

  function handleParticipantAdd() {
    console.log("Você clicou no botão de Adicionar!");
  }

  function handleParticipantRemove() {
    console.log("Você clicou no botão de Remover!");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 28 de Fevereiro de 2025.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
      data={participants}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />
      )} 
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.emptyListText}>
          Nenhum participante cadastrado.
        </Text>
      )}
      />

    </View>
  );
}
