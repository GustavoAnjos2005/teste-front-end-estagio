export const fetchProducts = async () => {
  try {
    const response = await fetch('/import_json.ts'); // Para testar localmente, trocar o /import_json.ts por: /api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json
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
