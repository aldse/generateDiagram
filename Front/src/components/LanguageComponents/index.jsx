// Import dos textos
import book from "./book";

// Enum das línguas
export const Language = {
  pt: 0,
  eng: 1,
  es: 2,
};

class Translate {
  /**
   * Função para retornar o texto traduzido
   * @param text Texto a ser obtido
   * @param language Língua
   * @returns Texto traduzido na língua desejada
   */
  getText(text, language) {
    // Se não houver língua
    if (!language) {
      // Define como ingles
      language = "eng";
    }
    // Se não encontrar o texto
    if (!book) {
      // Retorna o próprio texto
      return text;
    }
    // Retorna texto traduzido
    return book[Language[language]];
  }
}

export default new Translate();