import csv
import json

import os
import requests


PATH_PRODUTO = "./docs/produtos.csv"
PATH_ESTAB = "./docs/estabelecimentos.csv"


def open_produto_csv():
    vector = []
    try:
        with open(PATH_PRODUTO, newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                data = {
                    "nome": row["nome"],
                    "categoria": row["categoria"],
                    "estabelecimento": row["estabelecimento"]
                }
                vector.append(data)
    except Exception as err:
        print("Erro ao abrir produto:")
        print(err)
    return vector


def open_estabelecimento_csv():
    vector = []
    try:
        with open(PATH_ESTAB, newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:

                data = {"nome": row["nome"],
                        "cnpj": row["cnpj"],
                        "bairro": row["bairro"],
                        "cidade": row["cidade"]}
                vector.append(data)
    except Exception as err:
        print("Erro ao abrir estabelecimento: %s " % err)
    return vector


def request_data(data, rota):
    url = "http://localhost:3000/%s/" % rota

    headers = {'content-type': 'application/json'}

    print("start POST %s" % rota)
    for objeto in data:
        response = ""
        try:
            response = requests.post(
                url, data=json.dumps(objeto), headers=headers)
            print(response)
            print(objeto)
        except Exception as err:
            print('Algo deu errado: %s' % err)
            print(response)


def main():

    print("start push")
    # lista_estab = open_estabelecimento_csv()
    lista_produto = open_produto_csv()

    # request_data(lista_estab, "estabelecimento")
    request_data(lista_produto, "produto")
    print("finish push")


main()
