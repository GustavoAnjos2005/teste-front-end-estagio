const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/products`);
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
