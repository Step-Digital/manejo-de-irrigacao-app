import React, { useState } from "react";
import { AuthDomain } from "../../../core/domain/auth.domain";
import { ScrollView, StyleSheet, View } from "react-native";
import { Button } from "../../components/button";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../../routes/types/StackNavigationProps";
import { Typography } from "../../components/typography";
import { HeaderAuth } from "../../components/header-auth";
import { Input } from "../../components/input";
import { useMutation } from "@tanstack/react-query";
import { SignupDTO } from "../../../core/dtos/auth";
import { SignupModel } from "../../../core/models/auth";
import { AxiosError } from "axios";
import { FlashMessage } from "../../components/flash-message";

export type SignupProps = {
  auth: AuthDomain;
};

export const SignupScreen: React.FC<SignupProps> = ({ auth }) => {
  const navigation = useNavigation<NavigationProps>();
  const [data, setData] = useState<SignupDTO>({
    email: "user_test@manejodeirrigacao.agr.br",
    telefone1: "1",
    telefone2: "1",
    password: "12345678",
    nome: "Liandro 2",
    celular: "1",
    roles: ["user"],
    cep: "54723085",
    numero: "60",
    complemento: "sad",
    estado: "PE",
    logradouro: "Rua Severino Antonio da Silva",
    bairro: "Muribara",
    cidade: "SLM",
  });

  const onSignup = useMutation<SignupModel, AxiosError>({
    mutationFn: () => auth.signup(data),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingTop: 25,
        paddingBottom: 25,
      }}
    >
      <HeaderAuth />
      <View style={styles.form}>
        <Typography
          style={{
            marginVertical: 15,
          }}
          color="gray-5"
          size="huge"
          weight="regular"
        >
          Dados Pessoais
        </Typography>
        <Input label="Nome" placeholder="Insira seu nome" />
        <Input label="Email" placeholder="Insira seu email" />
        <Input label="Telefone" placeholder="Insira seu número de telefone" />
        <Input label="Celular" placeholder="Insira seu número de celular" />
        <Input label="Senha" placeholder="Insira sua senha" />
        <Input
          label="Confirme sua senha"
          placeholder="Insira sua senha novamente"
        />
        <Typography
          style={{
            marginVertical: 15,
          }}
          color="gray-5"
          size="huge"
          weight="regular"
        >
          Endereço
        </Typography>
        <Input label="CEP" placeholder="Insira seu CEP" />
        <Input
          label="Logradouro"
          placeholder="Insira seu CEP"
          editable={false}
        />
        <Input label="Número" placeholder="Nº 60" />
        <Input
          label="Estado"
          placeholder="Insira o nome do seu estado"
          editable={false}
        />
        <Input
          label="Cidade"
          placeholder="Insira o nome da sua cidade"
          editable={false}
        />
        <Button
          bg-color="positive"
          style={{
            marginVertical: 30,
          }}
          loading={onSignup.isLoading}
          onPress={() => onSignup.mutate()}
        >
          <Typography size="normal" color="pure-white" weight="bold">
            Cadastrar
          </Typography>
        </Button>
      </View>
      {onSignup.isError && (
        <FlashMessage
          title={onSignup.error.message}
          duration={3000}
          show
          type="error"
        />
      )}
      {onSignup.isSuccess && (
        <FlashMessage
          title={"Cadastro realizado com sucesso!"}
          duration={3000}
          show
          type="success"
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  form: {
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});
