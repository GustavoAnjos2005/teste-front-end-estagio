export const fetchProducts = async () => {
  try {
    const proxyUrl = 'https://corsproxy.io/?';
    const targetUrl = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';
    const response = await fetch(proxyUrl + encodeURIComponent(targetUrl));
    
    if (!response.ok) {
      throw new Error('Erro ao buscar os produtos');
    }
    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error('Erro ao consumir o JSON:', error);
    return [];
  }
};