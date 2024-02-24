import { styles } from "./style";
import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView, Alert, FlatList, ScrollView } from "react-native";
import { Colors } from "../../colors";
import { useState, useEffect } from "react";
import { Tarefa, tarefa } from "../../components/Tarefa"
import { Feather } from "@expo/vector-icons"

export function Home() {
  const [tarefas, setTarefas] = useState<tarefa[]>([]);
  const [tarefasDescription, setTarefasDescription] = useState("");

  function handleTarefasAdd() {
    if (tarefas.some(t => t.name === tarefasDescription)) {
      return Alert.alert("Tarefa existe", "Já existe esta tarefa");
    }

    setTarefas(prevState => [...prevState, {
      name: tarefasDescription,
      completed: false
    }]);
    setTarefasDescription("");
  }

  function handleTarefasRemove(tarefa: tarefa) {
    Alert.alert("Remover", `Remover a tarefa ${tarefa.name}?`, [
      {
        text: 'Sim',
        onPress: () => setTarefas(prevState => prevState.filter(
          (element) => element !== tarefa
        ))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleTarefaCompleted(tarefa: tarefa) {
    //deve marcar tarefa como "completed"
    const tarefaModificada = { ...tarefa, completed: !tarefa.completed };

    //atualizar state
    const posicaoTarefa = tarefas.findIndex(t => t.name === tarefa.name);
    const tarefasModificas = [...tarefas];
    tarefasModificas[posicaoTarefa] = tarefaModificada;
    setTarefas(tarefasModificas);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerContainerLogo}>
          <Image source={require("@/assets/Logo.png")} />
        </View>

        <View style={styles.containerBasic}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder='Adicione uma nova tarefa'
              placeholderTextColor={Colors.gray300}
              onChangeText={setTarefasDescription}
              value={tarefasDescription}
            />

            <TouchableOpacity style={styles.button} onPress={handleTarefasAdd}>
              {
                <Feather
                  name="plus-circle"
                  size={20}
                  color={Colors.white}
                />
              }
            </TouchableOpacity>
          </View>


          <View style={styles.taskList}>
            <View style={styles.clipboardHeader}>
              <View style={styles.clipboardHeaderItem}>
                <Text style={styles.clipboardHeaderTextCreated}>Criadas</Text>
                <View style={styles.clipboardHeaderCounter}>
                  <Text style={styles.clipboardHeaderCounterText}>
                    {tarefas.length}
                  </Text>
                </View>
              </View>
              <View style={styles.clipboardHeaderItem}>
                <Text style={styles.clipboardHeaderTextFinished}>Concluídas</Text>
                <View style={styles.clipboardHeaderCounter}>
                  <Text style={styles.clipboardHeaderCounterText}>
                    {tarefas.filter(t => t.completed).length}
                  </Text>
                </View>
              </View>
            </View>
            <FlatList
              data={tarefas}
              keyExtractor={(item, index) => item.name}
              renderItem={({ item }) => (
                <Tarefa
                  key={item.name}
                  tarefa={item}
                  onRemove={() => handleTarefasRemove(item)}
                  onComplete={() => handleTarefaCompleted(item)}
                />

              )}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <View style={styles.clipboard}>
                  <Image source={require("@/assets/Clipboard.png")} />
                  <Text style={styles.firstLine}>Você ainda não tem tarefas cadastradas</Text>
                  <Text style={styles.secondLine}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
              )}
            ></FlatList>
          </View>
        </View>
      </SafeAreaView >
    </View >
  )
}
