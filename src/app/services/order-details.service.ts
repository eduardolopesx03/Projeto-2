import { Injectable } from '@angular/core'; // Importa o decorador Injectable do Angular

@Injectable({
  providedIn: 'root' // Define o serviço como disponível em toda a aplicação
})
export class OrderDetailsService {

  constructor() { } // Construtor do serviço

  // Array de detalhes dos alimentos
  foodDetails = [
    {
      id: 1,
      foodName: "Sanduiche Natural de Frango", // Nome do prato
      foodDetails: "Sanduiche Natural de Frango", // Descrição do prato
      foodPrice: 200, // Preço do prato
      foodImg: "https://specialepaes.com/wp-content/uploads/2021/10/blog-speciale-receita.png" // URL da imagem
    },
    {
      id: 2,
      foodName: "Pizza De Frango & Vegetais",
      foodDetails: "Cebola| Tomate|Frango | Milho Verde, Queijo",
      foodPrice: 369,
      foodImg: "https://mamapaleo.blogs.nit.pt/wp-content/uploads/2017/08/IMG_9524-1-1300x1011.jpg"
    },
    {
      id: 3,
      foodName: "Hamburguer",
      foodDetails: "O Mais Gostoso",
      foodPrice: 149,
      foodImg: "https://aloalobahia.com/wp-content/uploads/2024/05/burgerday_unsplash.jpg"
    },
    {
      id: 4,
      foodName: "Enrolado Frango & Vegetais",
      foodDetails: "O Mais Saboroso",
      foodPrice: 140,
      foodImg: "https://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_85927909.jpg"
    },
    {
      id: 5,
      foodName: "Prato Especial",
      foodDetails: "Prato Especial",
      foodPrice: 105,
      foodImg: "https://live.staticflickr.com/2752/4405041013_c854122511_c.jpg"
    },
    {
      id: 6,
      foodName: "Ovo de colher",
      foodDetails: "Ovo de colher",
      foodPrice: 105,
      foodImg: "https://www.receiteria.com.br/wp-content/uploads/receitas-de-ovo-de-pascoa-de-colher-00.jpg"
    },
  ]
}
