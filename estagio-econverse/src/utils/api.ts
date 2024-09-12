const PRODUCTS_URL = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

const fetchWithCorsProxy = async (url: string) => {
  const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const response = await fetch(corsProxyUrl + url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

const fetchWithoutProxy = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const fetchProducts = async () => {
  try {
    // Tenta primeiro sem proxy
    const data = await fetchWithoutProxy(PRODUCTS_URL);
    return data.products || [];
  } catch (error) {
    console.warn('Falha ao buscar sem proxy, tentando com proxy CORS:', error);
    try {
      // Se falhar, tenta com proxy CORS
      const data = await fetchWithCorsProxy(PRODUCTS_URL);
      return data.products || [];
    } catch (proxyError) {
      console.error('Erro ao consumir o JSON com proxy:', proxyError);
      return [];
    }
  }
};