import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingTop: 60,
    paddingBottom: 40,
  },

  content: {
  width: '100%',
  alignItems: 'center',
},

  logo: {
    width: 50,
    height: 50,
    marginBottom: 32,
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginBottom: 6,
  },
  input: {
    width: '100%',
    backgroundColor: '#121212',
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 4,
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
  },
  buttonPrimary: {
    backgroundColor: '#1DB954',
    borderRadius: 50,
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonPrimaryText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  divider: {
    color: '#aaa',
    marginBottom: 24,
  },
});