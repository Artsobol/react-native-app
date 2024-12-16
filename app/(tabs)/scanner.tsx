import { Colors } from '@/shared/tokens';
import { CameraView, CameraType, useCameraPermissions, BarcodeScanningResult } from 'expo-camera';
import { useState, useRef } from 'react';
import { Modal, Button, StyleSheet, Text, TouchableOpacity, View, Alert, Linking, ActivityIndicator, Pressable } from 'react-native';
import axios from 'axios';
import CarrotIcon from '@/assets/icons/carrot';
import XMarkIcon from '@/assets/icons/xmarkIcon';
import ChevronIcon from '@/assets/icons/chevron';

interface ProductData {
  id: string;
  name: string;
  calories: string;
  fat: string;
  sugars: string;
  fiber: string;
  protein: string;
  salt: string;
  score: string;
}

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [lastScannedItem, setLastScannedItem] = useState<ProductData | null>(null);
  const [scanningEnabled, setScanningEnabled] = useState(true);
  const isProcessingRef = useRef(false);
  const [alertShown, setAlertShown] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);



  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Для использования камеры необходимо ваше разрешение.</Text>
        <Button onPress={requestPermission} title="Разрешить использование камеры" />
      </View>
    );
  }
  

  async function handleBarCodeScanned({ type, data } : BarcodeScanningResult) {
    if (!scanningEnabled || isProcessingRef.current) {
      console.log("Сканирование заблокировано, пропускаем...");
      return;
    }

    isProcessingRef.current = true;

    try {
      const response = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${data}.json`
      );

      if (response.data.status === 1) {
        const product = response.data.product;
        const nutriments = product.nutriments;
        const nutriscore = product.nutriscore;
        const nutriscore_data = product.nutriscore_data;
        const fat = nutriments?.['fat'] ?? nutriments?.['fat_100g'] ?? "?";
       // console.log(fat); // 0
        const calories = nutriments?.['energy-kcal'] ?? nutriments?.['energy-kcal_100g'] ?? "?";
        const sugars = nutriments?.['sugars'] ?? nutriments?.['sugars_100g'] ?? "?";
        const fiber = nutriscore?.['2021']?.['data']?.['fiber'] ?? nutriscore_data?.['fiber'] ?? nutriscore?.['2021']?.['data']?.['fiber_value'] ?? "?";
        const protein = nutriments?.['proteins'] ?? nutriments?.['proteins_100g'] ?? "?";
        const salt = nutriments?.['salt'] ?? nutriments?.['salt_100g'] ?? "?";
        const score = nutriscore?.['2023']?.['grade'].toUpperCase() ?? "?"


        setLastScannedItem({
          id: product._id,
          name: product.product_name || "Название не указано",
          calories: calories,
          fat: fat,
          sugars: sugars,
          fiber: fiber,
          protein: protein,
          salt: salt,
          score: score,

        });
        setScanningEnabled(false);
      } else {
        if (!alertShown) {
          setAlertShown(true);
          Alert.alert("Ошибка", "Продукт не найден в базе данных.", [
            {
              text: "OK",
              onPress: () => { setAlertShown(false);  setScanningEnabled(false); },
            },
          ]);
        }
      }
    } catch (error) {
      if (!alertShown) {
        setAlertShown(true);
        Alert.alert("Ошибка", "Не удалось подключиться к серверу.", [
          {
            text: "OK",
            onPress: () => { setAlertShown(false);  setScanningEnabled(false); },
          },
        ]);
      }
    } finally {
      isProcessingRef.current = false;
    }
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

    const handleOpenModal = () => {
      setModalVisible(true);
    };

    const handleCloseModal = () => {
      setModalVisible(false); 
    };

  function handleScanAgain() {
    setLastScannedItem(null); 
    setScanningEnabled(true);
    setAlertShown(false);
  }


  return (
<View style={styles.container}>
  <CameraView
    style={styles.camera}
    facing={facing}
    onBarcodeScanned={scanningEnabled ? handleBarCodeScanned : undefined}
  >
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
        <Text style={styles.text}>Перевернуть камеру</Text>
      </TouchableOpacity>
      {!scanningEnabled && (
        <TouchableOpacity style={styles.button} onPress={handleScanAgain}>
          <Text style={styles.text}>Сканировать снова</Text>
        </TouchableOpacity>
      )}
    </View>

  {lastScannedItem && !modalVisible && (
      <View style={styles.productContainer}>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreNumber}>{lastScannedItem.score}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.titleInfoContainer}>
          <Text style={styles.productName} adjustsFontSizeToFit
  numberOfLines={1} minimumFontScale={0.5}
  ellipsizeMode="tail">{lastScannedItem.name}</Text>
        </View>
        <View style={styles.kcalInfoContainer}>
          <Text style={styles.productCalories}>
            100g {lastScannedItem.calories}kcal
          </Text>
        </View>
      </View>
      <View style={styles.modalButtonContainer}>
        <Pressable
          style={({ pressed }) => [styles.infoButton, pressed && {opacity: 0.5}]}
          onPress={() => setModalVisible(true)}
        >
          <ChevronIcon style={styles.icon}></ChevronIcon>
        </Pressable>
      </View>
    </View>
  )}

  <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => setModalVisible(false)}
  >
    <View style={styles.modalContainer}>
    <View style={styles.modalUpper}>
      <View style={styles.scoreModalContainer}>
        <Text style={styles.scoreNumber}>{lastScannedItem?.score}</Text>
      </View>
      <View style={styles.infoModalContainer}>
        <View style={styles.titleInfoContainer}>
        <Text style={styles.productName} adjustsFontSizeToFit
  numberOfLines={1} minimumFontScale={0.5}
  ellipsizeMode="tail">{lastScannedItem?.name || "Item"}</Text>
        </View>
        <View style={styles.kcalInfoContainer}>
        <Text style={styles.productCalories}>per serving</Text>
        <Text style={styles.productCalories}>
          100g {lastScannedItem?.calories || 0}kcal
        </Text>
        </View>
      </View>
      <View style={styles.closeModalContainer}>
      <Pressable
          style={({ pressed }) => [styles.infoButton, pressed && {opacity: 0.5}]}
          onPress={handleCloseModal}
        >
          <XMarkIcon style={styles.icon}></XMarkIcon>
        </Pressable>
      </View>
        </View>
        <View style ={styles.modalAbout}>
          <View style={styles.imageAbout}>
          <CarrotIcon style={styles.icon}/>
          </View>
          <View style={styles.aboutTitle}>
          <Text style={styles.sectionTitle}>Nutrition facts</Text>
          </View>
          <View style={[styles.closeModalContainer, {paddingRight: 50}]}>
            <Text style={[styles.productCalories, {color: Colors.mediumGray, fontSize: 24}]}>100g</Text>
          </View>
        </View>
        <View style={styles.facts}>
          <View style={styles.categories}>
            <Text style={styles.fact}>Energy</Text>
            <Text style={styles.fact}>Fat</Text>
            <Text style={styles.fact}>Sugars</Text>
            <Text style={styles.fact}>Fiber</Text>
            <Text style={styles.fact}>Protein</Text>
            <Text style={styles.fact}>Salt</Text>
          </View>
          <View style={styles.values}>
            <Text style={styles.fact}>{lastScannedItem?.calories ?? "?"}kcal</Text>
            <Text style={styles.fact}>{lastScannedItem?.fat ?? "?"}g</Text>
            <Text style={styles.fact}>{lastScannedItem?.sugars ?? "?"}g</Text>
            <Text style={styles.fact}>{lastScannedItem?.fiber ?? "?"}g</Text>
            <Text style={styles.fact}>{lastScannedItem?.protein ?? "?"}g</Text>
            <Text style={styles.fact}>{lastScannedItem?.salt ?? "?"}g</Text>
          </View>
          </View>
          <View style={styles.buttonField}>
          <Pressable style={({ pressed }) => [styles.addButton, pressed && { opacity: 0.5 },]}>
          <Text style={[styles.scoreNumber, {fontSize: 20}]}>Add</Text>
          </Pressable>
          </View>
        </View>
    </Modal>
  </CameraView>
  </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingTop: 30,
    position: 'absolute'
  },
  button: {
    flex: 1,
    alignItems: 'center',

  },
  productContainer: {
    position: "absolute",
    top: "72%",
    flexDirection: 'row',
    alignItems: "center",
    left: 16,
    right: 16,
    padding: 16, 
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: Colors.white,
    width: 362,
    height: 91,
    paddingLeft: 0,
    paddingVertical: 0,
    paddingRight: 0,

  },
  infoContainer: {
    backgroundColor: Colors.mintWhite,
    height: "100%",
    width: "100%",
    overflow: "hidden",
    flexShrink: 1,
    flexDirection: 'column'

  },

  titleInfoContainer: {
    height: '50%',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingTop: 5,
    flexShrink: 1
  },

  productName: {
    fontFamily: "InterMedium",
    fontWeight: "400",
    fontSize: 36,
    flexShrink: 1
  },

  kcalInfoContainer: {
    paddingTop: 5,
    paddingLeft: 15,
    justifyContent: 'center',
  },

  productCalories: {
    color: Colors.lightGray,
    fontFamily: "InterMadium",
    fontSize: 16
  },

  modalButtonContainer: {
    backgroundColor: Colors.mintWhite,
    borderBottomRightRadius: 60,
    borderTopRightRadius: 60,
    height: '100%',
    flexShrink: 1,
    width: '45%',
    justifyContent: 'center',
  },

  modalContainer: {
    backgroundColor: Colors.mintWhite,
    width: 362,
    height: 437,
    top: 210,
    left: 20,
    borderRadius: 15,
    paddingLeft: 0,
  },

  modalUpper: {
    flexDirection: 'row',
    height: "20%",
    //justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: 0,
    paddingTop: 0,
  },

  scoreModalContainer: {
    backgroundColor: Colors.green,
    width: 90,
    height: "100%",
    borderTopLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },

  infoModalContainer: {
    justifyContent: 'center',
    height: "100%",
    width: "100%",
    overflow: "hidden",
    flexShrink: 1,
    flexDirection: 'column'
  },

  closeModalContainer: {
    height: '100%',
    flexShrink: 1,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageAbout: {
    height: "100%",
    width: 50,
    paddingTop: 15,
    paddingHorizontal: 10,
    alignContent: 'center'
  },

  aboutTitle: {
    paddingTop: 15,
    paddingHorizontal: 5,
    height: "100%",
    width: "100%",
    overflow: "hidden",
    flexShrink: 1,
    alignContent: 'center'
  },

sectionTitle: {
    fontFamily: "InterMedium",
    fontWeight: "300",
    fontSize: 30,
    color: Colors.mediumGray
  },


  icon: {
    width: 30,
    height: 30,
  },

  modalAbout: {
    width: '100%',
    height: "15%",
    alignContent:'center',
    flexDirection: 'row',
    marginBottom: 0,
    paddingBottom: 0,
  },


  infoButton: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 35,
  },

  facts: {
    width: "100%",
    height: "50%",
    flexDirection: 'row'
  },

  categories: {
    height: "100%",
    // backgroundColor: Colors.green,
    width: "50%",
    gap: 15,
    paddingLeft: 8
  },

  values: {
    height: "100%",
    width: "50%",
    gap: 15,
    paddingLeft: 90
  },

  fact: {
    fontFamily: "InterBold",
    fontWeight: "400",
    fontSize: 18,
    color: Colors.mediumGray,
  },

  showText: {
    fontFamily: "InterBold",
    fontWeight: "700",
    fontSize: 28,
    color: Colors.lightGray,
  },

  scoreContainer: {
    backgroundColor: Colors.green,
    width: 90,
    height: "100%",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scoreNumber: {
    fontFamily: "InterBold",
    fontWeight: 800,
    fontSize: 56
  },
  text: {
    fontSize: 16,
    fontFamily: "InterBold",
    fontWeight: "700",
    color: Colors.green,
  },

  buttonField: {
    //backgroundColor: Colors.darkGray,
    width: "100%",
    height: "100%",
    flexShrink: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },

  addButton: {
    borderRadius: 20,
    backgroundColor: Colors.green,
    width: "90%",
    height: "80%",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },


});
