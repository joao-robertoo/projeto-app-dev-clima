import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native';
import * as Location from 'expo-location';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const API_URL = '';
const API_KEY = '';

export default function App() {
  const [weather, setWeather] = useState(null);
  
  // 1. Referência para a animação de opacidade
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    getLocation();
  }, []);

  // 2. Dispara o Fade In quando os dados do clima chegam
  useEffect(() => {
    if (weather) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800, // Tempo do surgimento (0.8 segundos)
        useNativeDriver: true,
      }).start();
    }
  }, [weather]);

  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permissão negada');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});

    try {
      const response = await axios.get(API_URL, {
        params: {
          lat: location.coords.latitude,
          lon: location.coords.longitude,
          appid: API_KEY,
          units: 'metric',
          lang: 'pt_br',
        },
      });
      setWeather(response.data);
    } catch (error) {
      console.log('Erro ao buscar clima:', error);
    }
  }

  function getWeatherAnimation() {
    if (!weather) return require('./assets/animations/sunny.json');

    const main = weather.weather[0].main.toLowerCase();
    
    if (main.includes('thunderstorm')) return require('./assets/animations/thunderstorm.json');
    if (main.includes('rain')) return require('./assets/animations/rainy.json');
    if (main.includes('cloud')) return require('./assets/animations/cloudy.json');
    if (main.includes('clear')) return require('./assets/animations/sunny.json');
    
    return require('./assets/animations/sunny.json');
  }

  // ⏳ Tela de carregamento centralizada
  if (!weather) {
    return (
      <View style={styles.loadingContainer}>
        <StatusBar style="light" />
        <LottieView
          source={require('./assets/animations/sunny.json')} 
          autoPlay
          loop
          style={{ width: 150, height: 150 }}
        />
        <Text style={styles.loadingText}>Buscando previsão...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* 3. View Animada que recebe a opacidade */}
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        
        <LottieView
          source={getWeatherAnimation()}
          autoPlay
          loop
          style={styles.weatherIcon}
          resizeMode="contain"
        />

        <Text style={styles.cityName}>{weather.name}</Text>
        <Text style={styles.temperature}>{Math.round(weather.main.temp)}°C</Text>
        <Text style={styles.description}>{weather.weather[0].description}</Text>

        <View style={styles.infoContainer}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Sensação</Text>
            <Text style={styles.infoValue}>{Math.round(weather.main.feels_like)}°C</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Umidade</Text>
            <Text style={styles.infoValue}>{weather.main.humidity}%</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Vento</Text>
            <Text style={styles.infoValue}>{Math.round(weather.wind.speed)} m/s</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e3d59', 
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#1e3d59',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  loadingText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
    fontWeight: '300',
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  weatherIcon: {
    width: 200,
    height: 200,
    marginBottom: -20,
  },
  cityName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  temperature: {
    fontSize: 85,
    fontWeight: '200',
    color: '#fff',
  },
  description: {
    fontSize: 24,
    color: '#fff',
    textTransform: 'capitalize',
    marginBottom: 40,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  infoBox: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 15,
    borderRadius: 20,
    width: 100,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  infoLabel: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.7,
  },
  infoValue: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});