// a função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let T = parseInt(gets());
let N;

//TODO: Complete os espaços em branco com uma possível solução para o desafio

while (T !== 0) {
	for (let i = 1; i <= T; i++) {
		N = parseInt(gets());
		if (N % 2 !== 0)
	        print(2*N-1);
		else 
	        print(2*N-2);
	}
	T = parseInt(gets());
}