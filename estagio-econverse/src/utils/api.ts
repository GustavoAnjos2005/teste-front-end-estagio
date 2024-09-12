export const fetchProducts = async () => {
  try {
    const response = await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json');
    if (!response.ok) {
      throw new Error('Erro ao buscar os produtos');
    }
    const data = await response.json();
    return data.products || []; // Retorna a lista de produtos ou um array vazio se não encontrar produtos
  } catch (error) {
    console.error('Erro ao consumir o JSON:', error);
    return [];
  }
};
