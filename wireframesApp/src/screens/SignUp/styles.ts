import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    padding: 20,
  },
  footerText: {
    color: '#666',
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  inputContainer: {
    marginBottom: 30,
  },
  loginText: {
    color: '#000',
    fontWeight: '600',
  },
  phoneInput: {
    alignItems: 'center',
    borderColor: '#ddd',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 15,
    padding: 10,
  },
  prefix: {
    fontSize: 16,
    marginRight: 10,
  },
  signUpButton: {
    alignItems: 'center',
    backgroundColor: '#000',
    borderRadius: 8,
    padding: 15,
  },
  socialButton: {
    alignItems: 'center',
    borderColor: '#ddd',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    gap: 10,
    padding: 15,
  },
  socialContainer: {
    gap: 15,
  },
  socialText: {
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});
