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
    // Se não houver língua, define como inglês
    if (!language) {
      language = "eng";
    }

    // Se não encontrar o texto ou o livro de texto
    if (!book || !book[text]) {
      return text; // Retorna o texto original
    }

    // Obtém o índice da língua
    const langIndex = Language[language];
    // Se o índice da língua for inválido
    if (langIndex === undefined) {
      return text;
    }

    // Retorna o texto traduzido
    return book[text][langIndex] || text;
  }
}

export default new Translate();
