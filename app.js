// // fetch('database/database/games.json')
// //   .then(response => response.json())
// //   .then(data => {
// //     const gameList = document.querySelector('.main-ul');
// //     const cardTemplate = document.querySelector('#card-template').content;

// //     data.forEach(game => {
// //       const cardClone = cardTemplate.cloneNode(true);
// //       cardClone.querySelector('.card-image').src = game.image;
// //       cardClone.querySelector('.card-title').textContent = game.title;
// //       cardClone.querySelector('.card-description').textContent = game.description;
// //       gameList.appendChild(cardClone);
// //     });
// // });




// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// checkboxes.forEach(checkbox => {
//   checkbox.addEventListener('change', () => {
//     // Lógica para filtrar os jogos com base nos checkboxes selecionados
//     const selectElement = document.getElementById('category-filter');
//     const gameList = document.querySelector('.main-ul');

//     fetch('database/games.json')
//       .then(response => response.json())
//       .then(data => {
//         const gameList = document.querySelector('.main-ul');
//         const cardTemplate = document.querySelector('#card-template').content;
        
//         data.forEach(game => {
//           // ... (código para criar os cards)
//           const cardClone = cardTemplate.cloneNode(true);
//           cardClone.querySelector('.card-image').src = game.image;
//           cardClone.querySelector('.card-title').textContent = game.title;
//           cardClone.querySelector('.card-description').textContent = game.description;
//           gameList.appendChild(cardClone);
//         });

//         selectElement.addEventListener('change', (event) => {
//           const selectedCategory = event.target.value;
//           const filteredGames = data.filter(game => game.category === selectedCategory);

//           // Limpar a lista de cards antes de adicionar os novos
//           gameList.innerHTML = '';

//           // Criar os novos cards com os jogos filtrados
//           filteredGames.forEach(game => {
//             // ... (código para criar um card)
//           const cardClone = cardTemplate.cloneNode(true);
//           cardClone.querySelector('.card-image').src = game.image;
//           cardClone.querySelector('.card-title').textContent = game.title;
//           cardClone.querySelector('.card-description').textContent = game.description;
//           gameList.appendChild(cardClone);
//           });
//         });
//       });
//   });
// });

// fetch('database/games.json')
//   .then(response => response.json())
//   .then(data => {
//     const gameList = document.querySelector('.main-ul');
//     const cardTemplate = document.querySelector('#card-template').content;
//     const selectElement = document.getElementById('category-filter');

//     // Criar os cards inicialmente
//     data.forEach(game => {
//       // ... (código para criar os cards)
//       const cardClone = cardTemplate.cloneNode(true);
//       cardClone.querySelector('.card-image').src = game.image;
//       cardClone.querySelector('.card-title').textContent = game.title;
//       cardClone.querySelector('.card-description').textContent = game.description;
//       gameList.appendChild(cardClone);
//     });

//     // Adicionar o event listener após criar os cards
//     selectElement.addEventListener('change', (event) => {
//       const selectedCategory = event.target.value;
//       const filteredGames = data.filter(game => {
//         return selectedCategory === 'all' || game.category === selectedCategory;
//       });

//       // Limpar a lista de cards antes de adicionar os novos
//       gameList.innerHTML = '';

//       // Criar os novos cards com os jogos filtrados
//       filteredGames.forEach(game => {
//         // ... (código para criar um card)
//       });
//     });
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// checkboxes.forEach(checkbox => {
//   checkbox.addEventListener('change', () => {
//     // Lógica para filtrar os jogos com base nos checkboxes selecionados
//       fetch('database/database/games.json')
//         .then(response => response.json())
//         .then(data => {
//           const gameList = document.querySelector('.main-ul');
//           const cardTemplate = document.querySelector('#card-template').content;

//           data.forEach(game => {
//             const cardClone = cardTemplate.cloneNode(true);
//             cardClone.querySelector('.card-image').src = game.image;
//             cardClone.querySelector('.card-title').textContent = game.title;
//             cardClone.querySelector('.card-description').textContent = game.description;
//             gameList.appendChild(cardClone);
//           });
//       });
//   });
// });


// const filterContainer = document.getElementById('filter-container');
// const checkboxes = filterContainer.querySelectorAll('input[type="checkbox"]');
// // ... resto do código
// checkboxes.forEach(checkbox => {
//   checkbox.addEventListener('change',
//  () => {
//     // Lógica para filtrar os jogos com base nos checkboxes selecionados
//     const selectedCategories = [];
//     checkboxes.forEach(checkbox => {
//       if (checkbox.checked) {
//         selectedCategories.push(checkbox.value);
//       }
//     });

//     // Filtrar os jogos com base nas categorias selecionadas
//     const filteredGames = data.filter(game => {
//       return selectedCategories.some(category => game.category === category);
//     });

//     // Atualizar a lista de jogos
//     fetch('database/database/games.json')
//       .then(response => response.json())
//       .then(data => {
//         const gameList = document.querySelector('.main-ul');
//         const cardTemplate = document.querySelector('#card-template').content;

//         data.forEach(game => {
//           const cardClone = cardTemplate.cloneNode(true);
//           cardClone.querySelector('.card-image').src = game.image;
//           cardClone.querySelector('.card-title').textContent = game.title;
//           cardClone.querySelector('.card-description').textContent = game.description;
//           gameList.appendChild(cardClone);
//         });
//     });
//   });
// });


// const filterContainer = document.getElementById('filter-container');
// const checkboxes = filterContainer.querySelectorAll('input[type="checkbox"]');
// const gameList = document.querySelector('.main-ul');
// const cardTemplate = document.querySelector('#card-template').content;

// // Carregar dados do JSON
// fetch('database/games.json')
//     .then(response => response.json())
//     .then(data => {
//         // Criar os cards inicialmente
//         data.forEach(game => {
//             const cardClone = cardTemplate.cloneNode(true);
//             cardClone.querySelector('.card-image').src = game.image;
//             cardClone.querySelector('.card-title').textContent = game.title;
//             cardClone.querySelector('.card-description').textContent = game.description;
//             gameList.appendChild(cardClone);
//         });

//         // Adicionar event listener para os checkboxes
//         checkboxes.forEach(checkbox => {
//             checkbox.addEventListener('change', () => {
//                 const selectedCategories = [];
//                 checkboxes.forEach(checkbox => {
//                     if (checkbox.checked) {
//                         selectedCategories.push(checkbox.value);
//                     }
//                 });

//                 // Filtrar os jogos com base nas categorias selecionadas
//                 const filteredGames = data.filter(game => {
//                     return selectedCategories.some(category => game.category === category);
//                 });

//                 // Limpar a lista de cards antes de adicionar os novos
//                 gameList.innerHTML = '';

//                 // Criar os novos cards com os jogos filtrados
//                 filteredGames.forEach(game => {
//                     const cardClone = cardTemplate.cloneNode(true);
//                     cardClone.querySelector('.card-image').src = game.image;
//                     cardClone.querySelector('.card-title').textContent = game.title;
//                     cardClone.querySelector('.card-description').textContent = game.description;
//                     gameList.appendChild(cardClone);
//                 });
//             });
//         });
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });



// // fetch('database/database/games.json')
// //   .then(response => response.json())
// //   .then(data => {
// //     const gameList = document.querySelector('.main-ul');
// //     const cardTemplate = document.querySelector('#card-template').content;

// //     data.forEach(game => {
// //       const cardClone = cardTemplate.cloneNode(true);
// //       cardClone.querySelector('.card-image').src = game.image;
// //       cardClone.querySelector('.card-title').textContent = game.title;
// //       cardClone.querySelector('.card-description').textContent = game.description;
// //       gameList.appendChild(cardClone);
// //     });
// // });




// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// checkboxes.forEach(checkbox => {
//   checkbox.addEventListener('change', () => {
//     // Lógica para filtrar os jogos com base nos checkboxes selecionados
//     const selectElement = document.getElementById('category-filter');
//     const gameList = document.querySelector('.main-ul');

//     fetch('database/games.json')
//       .then(response => response.json())
//       .then(data => {
//         const gameList = document.querySelector('.main-ul');
//         const cardTemplate = document.querySelector('#card-template').content;
        
//         data.forEach(game => {
//           // ... (código para criar os cards)
//           const cardClone = cardTemplate.cloneNode(true);
//           cardClone.querySelector('.card-image').src = game.image;
//           cardClone.querySelector('.card-title').textContent = game.title;
//           cardClone.querySelector('.card-description').textContent = game.description;
//           gameList.appendChild(cardClone);
//         });

//         selectElement.addEventListener('change', (event) => {
//           const selectedCategory = event.target.value;
//           const filteredGames = data.filter(game => game.category === selectedCategory);

//           // Limpar a lista de cards antes de adicionar os novos
//           gameList.innerHTML = '';

//           // Criar os novos cards com os jogos filtrados
//           filteredGames.forEach(game => {
//             // ... (código para criar um card)
//           const cardClone = cardTemplate.cloneNode(true);
//           cardClone.querySelector('.card-image').src = game.image;
//           cardClone.querySelector('.card-title').textContent = game.title;
//           cardClone.querySelector('.card-description').textContent = game.description;
//           gameList.appendChild(cardClone);
//           });
//         });
//       });
//   });
// });

// fetch('database/games.json')
//   .then(response => response.json())
//   .then(data => {
//     const gameList = document.querySelector('.main-ul');
//     const cardTemplate = document.querySelector('#card-template').content;
//     const selectElement = document.getElementById('category-filter');

//     // Criar os cards inicialmente
//     data.forEach(game => {
//       // ... (código para criar os cards)
//       const cardClone = cardTemplate.cloneNode(true);
//       cardClone.querySelector('.card-image').src = game.image;
//       cardClone.querySelector('.card-title').textContent = game.title;
//       cardClone.querySelector('.card-description').textContent = game.description;
//       gameList.appendChild(cardClone);
//     });

//     // Adicionar o event listener após criar os cards
//     selectElement.addEventListener('change', (event) => {
//       const selectedCategory = event.target.value;
//       const filteredGames = data.filter(game => {
//         return selectedCategory === 'all' || game.category === selectedCategory;
//       });

//       // Limpar a lista de cards antes de adicionar os novos
//       gameList.innerHTML = '';

//       // Criar os novos cards com os jogos filtrados
//       filteredGames.forEach(game => {
//         // ... (código para criar um card)
//       });
//     });
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// checkboxes.forEach(checkbox => {
//   checkbox.addEventListener('change', () => {
//     // Lógica para filtrar os jogos com base nos checkboxes selecionados
//       fetch('database/database/games.json')
//         .then(response => response.json())
//         .then(data => {
//           const gameList = document.querySelector('.main-ul');
//           const cardTemplate = document.querySelector('#card-template').content;

//           data.forEach(game => {
//             const cardClone = cardTemplate.cloneNode(true);
//             cardClone.querySelector('.card-image').src = game.image;
//             cardClone.querySelector('.card-title').textContent = game.title;
//             cardClone.querySelector('.card-description').textContent = game.description;
//             gameList.appendChild(cardClone);
//           });
//       });
//   });
// });


// const filterContainer = document.getElementById('filter-container');
// const checkboxes = filterContainer.querySelectorAll('input[type="checkbox"]');
// // ... resto do código
// checkboxes.forEach(checkbox => {
//   checkbox.addEventListener('change',
//  () => {
//     // Lógica para filtrar os jogos com base nos checkboxes selecionados
//     const selectedCategories = [];
//     checkboxes.forEach(checkbox => {
//       if (checkbox.checked) {
//         selectedCategories.push(checkbox.value);
//       }
//     });

//     // Filtrar os jogos com base nas categorias selecionadas
//     const filteredGames = data.filter(game => {
//       return selectedCategories.some(category => game.category === category);
//     });

//     // Atualizar a lista de jogos
//     fetch('database/database/games.json')
//       .then(response => response.json())
//       .then(data => {
//         const gameList = document.querySelector('.main-ul');
//         const cardTemplate = document.querySelector('#card-template').content;

//         data.forEach(game => {
//           const cardClone = cardTemplate.cloneNode(true);
//           cardClone.querySelector('.card-image').src = game.image;
//           cardClone.querySelector('.card-title').textContent = game.title;
//           cardClone.querySelector('.card-description').textContent = game.description;
//           gameList.appendChild(cardClone);
//         });
//     });
//   });
// });



const filterContainer = document.getElementById('filter-container');
const checkboxes = filterContainer.querySelectorAll('input[type="checkbox"]');
const gameList = document.querySelector('.main-ul');
const cardTemplate = document.querySelector('#card-template').content;


// Carregar dados do JSON
fetch('database/games.json')
    .then(response => response.json())
    .then(data => {

        // Adicionar event listener para os checkboxes
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const selectedCategories = [];
                checkboxes.forEach(checkbox => {
                    if (checkbox.checked) {
                        selectedCategories.push(checkbox.value);
                    }
                });

                // Filtrar os jogos com base nas categorias selecionadas
                const filteredGames = data.filter(game => {
                  
                    return selectedCategories.some(category => game.category === category);
                });

                // Limpar a lista de cards antes de adicionar os novos
                gameList.innerHTML = '';

                // Criar os novos cards com os jogos filtrados
                filteredGames.forEach(game => {
                    const cardClone = cardTemplate.cloneNode(true);
                    cardClone.querySelector('.card-image').src = game.image;
                    cardClone.querySelector('.card-title').textContent = game.title;
                    cardClone.querySelector('.card-description').textContent = game.description;
                    gameList.appendChild(cardClone);

                    // Selecionar todos os cards
                    const searchInput = document.getElementById('searchInput');
                    const cards = document.querySelectorAll('.main-li');

                    function search() {
                        const searchTerm = searchInput.value.toLowerCase();

                        cards.forEach(card => {
                        const title = card.querySelector('.card-title').textContent.toLowerCase();   

                        const description = card.querySelector('.card-description').textContent.toLowerCase();   


                        const isMatch = title.includes(searchTerm) || description.includes(searchTerm);
                        card.style.display = isMatch ? 'block' : 'none';
                        });
                    }
                    searchInput.addEventListener('input', search);

                    // Adicionar um evento de clique a cada card
                    cards.forEach(card => {
                        card.addEventListener('click', () => {
                            // Obter o título do card (pode ser extraído de um atributo data-title, por exemplo)
                            const title = card.querySelector('.card-title').textContent;

                            // Buscar as informações do jogo no JSON (adapte para sua estrutura)
                            const selectedGame = data.find(game => game.title === title);

                            // Atualizar o conteúdo da seção "Por Onde Começar?"
                            const introTitle = document.querySelector('.game-title');
                            const introParagraphs = document.querySelectorAll('.final');
                            const banner = document.querySelector('.banner');

                            introTitle.textContent = selectedGame.title;

                            banner.src = selectedGame.image

                            // Limpar os parágrafos existentes
                            introParagraphs.forEach(paragraph => {
                            paragraph.textContent = '';
                            });

                            // Adicionar a descrição do jogo ao primeiro parágrafo
                            introParagraphs[0].textContent = selectedGame.description;

                            // Obter o elemento para o qual rolar
                            const targetSection = document.querySelector('.game-title');

                            // Rolar suavemente até o elemento
                            targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        });
                    });
                });
            });
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });


// const searchInput = document.getElementById('searchInput');
// const cards = document.querySelectorAll('.main-li');

// function search() {
//     const searchTerm = searchInput.value.toLowerCase();

//     cards.forEach(card => {
//     const title = card.querySelector('.card-title').textContent.toLowerCase();   

//     const description = card.querySelector('.card-description').textContent.toLowerCase();   


//     const isMatch = title.includes(searchTerm) || description.includes(searchTerm);
//     card.style.display = isMatch ? 'block' : 'none';
//     });
// }
