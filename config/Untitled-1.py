print(" rj")

while opçao != 1:
	print('4 - listar cidades')
	print('3 - escolher minha cidade')
	print('2 - listar  minhas cidades')
	print('1 - sair')
	opçao = int(input(">>>"))
	if opcao == 4:
		ordem = 0
		for cidades in cidades:
			print(ordem, '-', cidades)
			ordem = ordem + 1
		elif opcao == 3:
			escolha = int(input('ecplha suas cidaes:'))
			minhasCidades.add(cidades[escolha])
		elif opcao == 2:
			print(minhaCidade)
		elif opcao == 1:
			print('tchal')
            