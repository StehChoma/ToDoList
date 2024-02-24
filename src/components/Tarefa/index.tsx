import { styles } from "./style";
import { View, Text, TouchableOpacity, Button, Alert, SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Colors } from "@/colors";

export type tarefa = {
  name: string
  completed: boolean 
}

type Props = { 
  tarefa: tarefa;
  onRemove: () => void;
  onComplete: () => void;
}

export function Tarefa({tarefa, onRemove, onComplete}: Props) {

  function buttonCheck() {
    onComplete();
  }

  return (
    <SafeAreaView>
    <View style={styles.containerTarefa}>
      <View style={styles.circle}>
        <TouchableOpacity onPress={buttonCheck}>
          <Feather 
            name={tarefa.completed ? "check-circle" : 'circle'}
            size={20} 
            color={Colors.white} 
          />
        </TouchableOpacity>
      </View>
      
      <View>
        <Text style={styles.textTarefa}>
          {tarefa.name}
        </Text>
      </View>

      <View>
        <TouchableOpacity onPress={onRemove}>
          <Feather 
            name={"trash-2"}
            size={20} 
            color={Colors.white} 
          />
        </TouchableOpacity>
      </View>
    
    </View>
    </SafeAreaView>
  )
}



