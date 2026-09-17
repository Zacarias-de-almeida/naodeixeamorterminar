# Colocar o preço real na oferta

## Objetivo
Substituir o marcador de preço pelo valor real fornecido: **5.773 Kz**.

## Alterações
1. Na secção da oferta (`src/routes/index.tsx`), trocar o preço `[INSERIR PREÇO] Kz` por **5.773 Kz**, mantendo o destaque visual atual (tamanho grande, cor de destaque dourada).
2. Formatar o valor à moda angolana, com separador de milhares: “5.773 Kz”.

## O que não muda
- O “Valor total: [INSERIR VALOR] Kz” riscado e a percentagem de poupança “Poupe [INSERIR %]%” continuam como estão, porque não foram fornecidos. Quando enviares o valor antigo, preencho esses também.
- Nenhum outro texto, layout ou botão é alterado.
